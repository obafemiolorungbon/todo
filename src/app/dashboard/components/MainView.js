import { Profile } from "./Profile";
import CheckboxesTags from "./SearchBar";
import { MainViewWrapper, SearchBarWrapper } from "./styles";
import { Todos } from "./Todos";

export const MainView = (props) => {
  const { user } = props;
  return (
    <>
      <MainViewWrapper>
        <SearchBarWrapper>
          <CheckboxesTags />
          <Profile name={user.name || ""} profileImage={user.imageUrl} />
        </SearchBarWrapper>
        <Todos {...props} />
      </MainViewWrapper>
    </>
  );
};
