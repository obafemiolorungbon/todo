import { Profile } from "./Profile";
import CheckboxesTags from "./SearchBar";
import { MainViewWrapper, SearchBarWrapper } from "./styles";
import { Todos } from "./Todos";

export const MainView = (props) => {
  return (
    <>
      <MainViewWrapper>
        <SearchBarWrapper>
          <CheckboxesTags />
          <Profile />
        </SearchBarWrapper>
        <Todos {...props} />
      </MainViewWrapper>
    </>
  );
};
