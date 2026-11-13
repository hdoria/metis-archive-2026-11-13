# macOS local package

The current package targets Apple Silicon (arm64), macOS 11 or later. The official local package is signed with Developer ID Application: Popcode (`C42XKG5G6X`), notarized by Apple and accepted by Gatekeeper. The earlier ad-hoc test build is retained separately.

## Install the signed package

- Installer: `src-tauri/target/release/bundle/signed/dmg/Métis_0.1.0_aarch64.dmg`
- Standalone app: `src-tauri/target/release/bundle/signed/macos/Métis.app`

Open the signed DMG and drag Métis into Applications. Close a running copy of Métis before replacing it. The package is version 0.1.0, for Apple Silicon; no Intel build is included.

The DMG is 23,115,501 bytes, with SHA-256 `32b7db71611c91154a15651915d197a8f8f98ebb96d5a5b705108052948f6975`. Both the app and DMG received Apple's `Accepted` result without issues, have valid stapled tickets and passed Gatekeeper assessment. The mounted app matched the signed standalone app. No personal vaults were opened for verification.

Public download distribution still awaits the whiteboard vendor license. Signing and notarization are complete; that separate prerequisite remains recorded in `release-record.md`.

## Build and verify an ad-hoc test package

Run from the repository root with Rust's cargo binary available in PATH. Keep Apple notarization credentials out of the local ad-hoc build environment. The tested workflow builds sources first and then packages the resulting executable:

```sh
APPLE_SIGNING_IDENTITY=- pnpm tauri build --no-bundle
APPLE_SIGNING_IDENTITY=- pnpm tauri bundle --bundles app,dmg
codesign --verify --deep --strict --verbose=2 'src-tauri/target/release/bundle/macos/Métis.app'
hdiutil verify 'src-tauri/target/release/bundle/dmg/Métis_0.1.0_aarch64.dmg'
```

Outputs:

- `src-tauri/target/release/bundle/macos/Métis.app`
- `src-tauri/target/release/bundle/dmg/Métis_0.1.0_aarch64.dmg`

Open the DMG and drag Métis into Applications to install the local test build. macOS may require an explicit approval for this app in Privacy & Security because the signature is ad-hoc. Signature integrity alone does not mean Apple notarization or Gatekeeper approval.

The packaging check mounts the DMG read-only, compares the packaged application with its source, and checks the icon, credits and license. Launching against personal vaults is not part of that verification.

## Apple distribution requirements

To prepare a Developer ID-signed and notarized package, provide these through the local development setup:

- Active Apple Developer Program membership and the intended team.
- A valid Developer ID Application certificate and its private key in Keychain Access. A certificate without the matching private key is insufficient.
- Authentication for notarization: an App Store Connect API key, or Apple ID with an app-specific password and Team ID. Keep credentials in the local environment or a Keychain profile, outside Git and chat.

The current Mac has a valid Popcode Developer ID Application identity and the `metis-popcode` notarization profile in Keychain. Future packages must be signed, submitted for notarization, stapled and assessed again; the completed 0.1.0 checks do not apply to later builds.

See [Tauri macOS signing](https://v2.tauri.app/distribute/sign/macos/) and [Apple Developer ID](https://developer.apple.com/developer-id/). Public distribution also awaits the whiteboard vendor license already recorded in `release-record.md`.

## Popcode signing setup

The Apple Developer portal confirms Popcode's team ID as `C42XKG5G6X`. App Store Connect confirms `contato@popcode.com.br` is its Account Holder. Use that account to create Developer ID Application certificates: the existing iOS account `iosdev@popcode.com.br` has Admin access, which is insufficient for this operation. The existing iOS project's team and API-key issuer also differ from Popcode's; do not copy its certificate storage or API credentials into this workflow.

Fastlane 2.241.2 is installed and explicitly pinned outside the repository at `~/.local/share/metis-fastlane/fastlane`. Its wrapper isolates Ruby gems and selects `/Applications/Xcode.app/Contents/Developer` only for its subprocess. Version and `cert --help` checks passed. The holder completed authentication, certificate creation and notarization credential setup locally.

The initially reused version, 2.237.0, failed before authentication with `Service key is empty`: Apple's old public configuration endpoint returns HTTP 404. Updating to the official 2.241.2 release fixes that lookup. A credential-free test reproduced the old failure, then verified that the new version obtains the current public widget key using a HEAD request without cookies or redirects. No private session or hardcoded key was used. See [the upstream fix](https://github.com/fastlane/fastlane/pull/30206).

The local interactive setup is `~/.config/metis/signing/configurar-assinatura.command`. It waits for user input before running:

```sh
env -u CERT_API_KEY -u CERT_API_KEY_PATH -u DELIVER_API_KEY -u DELIVER_API_KEY_PATH \
  -u APP_STORE_CONNECT_API_KEY -u APP_STORE_CONNECT_API_KEY_PATH \
  -u FASTLANE_SESSION -u SPACESHIP_SESSION -u FASTLANE_PASSWORD \
  FASTLANE_DONT_STORE_PASSWORD=1 ~/.local/share/metis-fastlane/fastlane cert \
  --username contato@popcode.com.br --team_id C42XKG5G6X \
  --type developer_id_application --platform macos --force false \
  --skip_set_partition_list true \
  --output_path ~/.config/metis/signing

xcrun notarytool store-credentials metis-popcode \
  --apple-id contato@popcode.com.br --team-id C42XKG5G6X
```

The first command requires the normal Apple ID password and any requested two-factor verification. The second requires an app-specific password and saves it in macOS Keychain. Keep passwords out of chat, shell arguments and Git. The local setup clears inherited API-key options so the Apple ID flow cannot silently use another project's issuer. Its signing directory is private to the current user.

`cert` creates a Developer ID Application G2 certificate if needed and never revokes existing certificates. No `match nuke` is needed. The certificate's private key stays in the local signing directory and Keychain; retain a secure backup before deleting that directory. Because automatic keychain partition changes are disabled, macOS may ask for permission when `codesign` first uses the key.

After setup on another Mac, verify that `security find-identity -v -p codesigning` lists a Developer ID Application identity for `C42XKG5G6X`, then sign, notarize, staple and assess a fresh package. The original ad-hoc artifacts remain unsigned by Developer ID; use the separate `bundle/signed/` outputs above for installation. See [Fastlane cert](https://docs.fastlane.tools/actions/cert/) and [Fastlane authentication](https://docs.fastlane.tools/getting-started/ios/authentication/).
