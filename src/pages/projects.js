import * as React from "react";
import Layout from '../components/Layout';
const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const footerStyles = {
    fontSize: "2rem",
    fontWeight: "bold",
};
const headingStyles = {
    fontSize: "1.75rem",
    fontWeight: "bold"
};
const heading2Styles = {
    marginTop: -10,
    marginBottom: 35,
    maxWidth: "45rem",
    fontSize: "1.5rem",
    fontWeight: "bold"
};
const headingAccentStyles = {
    color: "#663399",
};
const paragraphStyles = {
    marginBottom: 48,
    color: "white",
};
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
};
const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
};
const doclistStyles = {
    paddingLeft: 0,
};
const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
};
const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
};
const docLinkStyle = {
    ...linkStyle,
    listStyleType: "none",
    display: `inline-block`,
    marginBottom: 24,
    marginRight: 12,
};
const descriptionStyle = {
    color: "#232129",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
};
const docLinks = [
    {
        text: "TypeScript Documentation",
        url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
        color: "#8954A8",
    },
    {
        text: "GraphQL Typegen Documentation",
        url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
        color: "#8954A8",
    }
];
const badgeStyle = {
    color: "#fff",
    backgroundColor: "#088413",
    border: "1px solid #088413",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "4px 6px",
    display: "inline-block",
    position: "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
};
const IndexPage = () => {
    return (React.createElement("main", { style: pageStyles },
        React.createElement(Layout, null,
            React.createElement("div", { class: "container mx-auto" },
                React.createElement("h3", { style: { fontSize: 12 } },
                    React.createElement("i", null, "JAN-MAY 2023 "),
                    " - IOS APPLICATION | REACT NATIVE, EXPO, GO "),
                React.createElement("h1", { style: headingStyles }, "VolunteerOne"),
                "Connecting volunteers to their communities ",
                React.createElement("br", null),
                React.createElement("a", { style: { fontSize: 10, color: "#701a75" }, href: "https://github.com/VolunteerOne/volunteer-one-app" }, "VIEW REPO")),
            React.createElement("div", { style: { paddingTop: 75 }, class: "container mx-auto" },
                React.createElement("h3", { style: { fontSize: 12 } },
                    React.createElement("i", null, "MAY-AUG 2022 "),
                    " - VISUAL STUDIO "),
                React.createElement("h1", { style: headingStyles }, "Blazor Empty Project Templates"),
                "Added in .NET 7 SDK ",
                React.createElement("br", null),
                React.createElement("a", { style: { fontSize: 10, color: "#701a75" }, href: "https://devblogs.microsoft.com/dotnet/asp-net-core-updates-in-dotnet-7-preview-6/#empty-blazor-project-templates#empty-blazor-project-templates" }, "VIEW BLOG POST")),
            React.createElement("div", { style: { paddingTop: 75 }, class: "container mx-auto" },
                React.createElement("h3", { style: { fontSize: 12 } },
                    React.createElement("i", null, "MAY-AUG 2021 "),
                    " - VS CODE EXTENSION "),
                React.createElement("h1", { style: headingStyles }, "Journey"),
                "Step-by-step learning experiences in Polyglot Notebooks ",
                React.createElement("br", null),
                React.createElement("a", { style: { fontSize: 10, color: "#701a75" }, href: "https://github.com/dotnet-interactive-learning/journey/tree/main" }, "VIEW REPO")),
            React.createElement("p", { style: { marginTop: 60 } },
                React.createElement("hr", { class: "h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" })),
            React.createElement("h1", { id: "about-connect", style: footerStyles }, "Let's connect:"),
            React.createElement("div", { style: { marginTop: 10 }, class: "flex space-x-8" },
                React.createElement("a", { href: "https://www.linkedin.com/in/cerasamson/" }, "LinkedIn"),
                React.createElement("a", { href: "https://github.com/cerasamson" }, "GitHub"),
                React.createElement("a", { href: "mailto:cerasamson@gmail.com" }, "Email")))));
};
export default IndexPage;
export const Head = () => React.createElement("title", null, "About - Cera Samson");
