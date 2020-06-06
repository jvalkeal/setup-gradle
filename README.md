# setup-gradle

<p align="left">
  <a href="https://github.com/jvalkeal/setup-gradle"><img alt="GitHub Actions status" src="https://github.com/jvalkeal/setup-gradle/workflows/Main%20workflow/badge.svg"></a>
</p>

This action sets up a gradle environment for use in actions by:

- optionally downloading and caching a requested version of gradle by version and adding to PATH.
- registering problem matchers for error output

# Usage

See [action.yml](action.yml)

## Gradle Versions
```yaml
steps:
- uses: actions/checkout@v1
- uses: jvalkeal/setup-gradle@v1
  with:
    gradle-version: '5.6.2'
    gradle-file: <path to gradle-file> # Optional - to install gradle from.
- run: gradle build
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
