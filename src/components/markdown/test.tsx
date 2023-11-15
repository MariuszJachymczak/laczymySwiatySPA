import Typography from "@mui/material/Typography";
import Markdown from "./Markdown";
import blogPostContent from "../posts/blog-post1.md";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function MarkdownListItem(props: any) {
  return <Box component="li" sx={{ mt: 1, typography: "body1" }} {...props} />;
}

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h4",
        component: "h1",
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: "h6", component: "h2" },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "caption",
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: MarkdownListItem,
    },
  },
};

export function MarkdownComponent(props: any) {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(blogPostContent)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <Markdown options={options} {...props}>
      {content}
    </Markdown>
  );
}

export default MarkdownComponent;
