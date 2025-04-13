module.exports = {
    tabWidth: 4,
    singleQuote: false,
    semi: false,
    bracketSpacing: false,
    trailingComma: "all",
    overrides: [
        {
            files: ["slides.md", "pages/*.md"],
            options: {
                parser: "slidev",
                plugins: ["prettier-plugin-slidev"],
            },
        },
    ],
}
