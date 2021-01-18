import Switch from "react-switch";
import { shade } from "polished";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Container } from "./styles";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header({
  toggleTheme,
  children,
}: {
  toggleTheme: Function;
  children?: JSX.Element;
}) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      {children}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaSun color="#222" size={15} style={{ marginRight: 5 }} />
        <Switch
          onChange={() => toggleTheme()}
          checked={title === "dark"}
          checkedIcon={null}
          uncheckedIcon={null}
          height={20}
          width={50}
          handleDiameter={25}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secundary}
        />
        <FaMoon color="#f5f5f5" size={15} style={{ marginLeft: 5 }} />
      </div>
    </Container>
  );
}
