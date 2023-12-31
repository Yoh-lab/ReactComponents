import { useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Home from "./view/Home";
import SignInPage from "./view/SignInPage";

function App() {
  // ユーザーの設定に応じたダークモードの優先設定を取得
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // useMemoフックを使用してテーマを作成
  const theme = useMemo(
    () =>
      createTheme({
        // パレットのモードをダークモードまたはライトモードに設定
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#df929b",
            extraDark: "#c06d76",
            dark: "#c76672",
            light: "#ec939d",
            extraLight: "#EBF4FB",
            alpha08: "#0077C714",
          },
          noticeRed: {
            main: "#c06d76",
            dark: "#c8a251",
            light: "#f7d282",
          },
        },
        typography: {
          fontFamily: "Inter, 'Noto Sans JP'",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <div className="App">
      <div className="App flex min-h-screen text-center flex-col items-center justify-center">
        {/* アプリケーション全体のテーマを設定するためにThemeProviderを使用 */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="">
            {/* ルーティングを設定するためにBrowserRouterを使用 */}
            <BrowserRouter>
              <Routes>
                {/* ルートパスに対するルート要素としてSignInPageコンポーネントを設定 */}
                <Route path={`/`} element={<SignInPage />} />
                /homeパスに対するルート要素としてHomeコンポーネントを設定
                <Route path={`/home`} element={<Home />} />
              </Routes>
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
