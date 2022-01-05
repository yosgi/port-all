import * as React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const getlistStyles = ( isDraggingOver) =>({
  marginBottom: 96,
  paddingLeft: 0,
})
const getIistItemStyles = (isDragging, draggableStyle) => ({
    userSelect: "none",
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
    padding:8,
    background: isDragging ? "lightgreen" : "#fff",
    ...draggableStyle
  
})

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Alien Jellyfish",
  url: "https://twitter.com/AJellyfishNFT",
  color: "#8954A8",
};

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

// data
const links = [
  {
    text: "STEP.1",
    url: "https://twitter.com/AJellyfishNFT",
    description:
      "Create twitter account √",
    color: "#E95800",
    id:'1'
  },
  {
    text: "STEP.2",
    url: "https://opensea.io/",
    description:
      "Create Opensea account √",
    color: "#1099A8",
    id:'2'
  },
  {
    text: "STEP.3",
    url: "",
    description:
      "Publish the first jellyfish work",
    color: "#BC027F",
    id:'3'
  },
  {
    text: "STEP.4",
    url: "",
    description:
      "Post first twitter message",
    color: "#0D96F2",
    id:'4'
  },
  {
    text: "STEP.5",
    url: "",
    description:
      "jellyfish games ....",
    color: "#0D96F2",
    id:'5'
  }
];
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
// markup
const IndexPage = () => {
  const [linkItems,setLinks] = React.useState(links)
  const onDragEnd =  (result) =>  {
    if (!result.destination) {
      return;
    }
    let nextLinks = reorder(linkItems, result.source.index,result.destination.index)
    setLinks(nextLinks)
  }
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        welcome! 
        <br />
        <span style={headingAccentStyles}>— Jellyfish world! </span>
      </h1>
 

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getlistStyles(snapshot.isDraggingOver)}
            >
              <li style={docLinkStyle}>
                <a
                  style={linkStyle}
                  href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                >
                  {docLink.text}
                </a>
              </li>
              {linkItems.map((link,index) => (
                <Draggable  key={link.id} draggableId={link.id} index={index}>
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      key={link.url}
                      style={{ ...getIistItemStyles(snapshot.isDragging,
                        provided.draggableProps.style), color: link.color }}
                    >
                      <span>
                        <a
                          style={linkStyle}
                          href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                        >
                          {link.text}
                        </a>
                        {link.badge && (
                          <span style={badgeStyle} aria-label="New Badge">
                            NEW!
                          </span>
                        )}
                        <p style={descriptionStyle}>{link.description}</p>
                      </span>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  );
};

export default IndexPage;
