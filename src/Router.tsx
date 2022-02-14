import { BrowserRouter, Route, Switch } from "react-router-dom";

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

const Router = ({ toggleDark, isDark }: IRouterProps) => {
  return (
    <BrowserRouter>
      <Switch></Switch>
    </BrowserRouter>
  );
};

export default Router;
