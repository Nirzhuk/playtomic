import styled from "styled-components";

interface ParagraphProps {
    size?: string;
    color?: string;
    as?: string;
}

const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
`;

Paragraph.defaultProps = {
    size: "auto",
    color: "black",
};

export default Paragraph;
