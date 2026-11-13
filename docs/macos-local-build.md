# macOS local package

The current package targets Apple Silicon (arm64), macOS 11 or later. It is a production build with an ad-hoc signature for local testing. It has no Developer ID signature or notarization, and Gatekeeper assessment does not approve it for normal internet distribution.

## Build and verify

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

The current Mac has `notarytool` through Command Line Tools, but no valid code-signing identity was found. Once credentials are configured, rebuild with the Developer ID identity, submit for notarization, staple the ticket and verify Gatekeeper acceptance before distribution.

See [Tauri macOS signing](https://v2.tauri.app/distribute/sign/macos/) and [Apple Developer ID](https://developer.apple.com/developer-id/). Public distribution also awaits the whiteboard vendor license already recorded in `release-record.md`.
