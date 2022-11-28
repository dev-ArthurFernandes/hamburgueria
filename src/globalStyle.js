import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  /* Primary Pallete */
  --color-primary: #27ae60;
  --color-primary-50: #93d7af;
  --color-secondary: #eb5757;

  /* Grey Scale Pallete */
  --color-grey-100: #333333;
  --color-grey-50: #828282;
  --color-grey-20: #e0e0e0;
  --color-grey-0: #f5f5f5;
  --color-White: #ffffff;

  /* Feedback Pallete */
  --Negative: #e60000;
  --Warning: #ffcd07;
  --Success: #168821;
  --Information: #155bcb;

  /* Typography */

  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
}

/* Reset */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

`;
