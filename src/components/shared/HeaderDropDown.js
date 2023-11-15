import Select from "react-select";

const HeaderDropDown = () => {
  const options = [
    { value: "Popular Movies", label: "Popular Movies" },
    { value: "Top Rated", label: "Top Rated" },
    { value: "Now Playing", label: "Now Playing" },
  ];

  return (
    <div style={{ width: "20rem" }}>
      <Select
        styles={{
          option: (baseStyles, state) => ({
            ...baseStyles,
            color: "white",
            width: "inherit",
            background: state.isFocused ? "#7ad76a" : "#18c50f",
            fontFamily: "Roboto"
          }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "transparent",
            width: "inherit",
            boxShadow: state.isFocused ? null : null,
            borderColor: state.isFocused ? "transparent" : "transparent",
            "&:hover": {
              borderColor: state.isFocused ? "transparent" : "transparent"
            }
          }),
          menuList: (baseStyles, state) => ({
            ...baseStyles,
            padding: 0,
            borderRadius: 5,
            boxShadow: "0 3px 55px 1px black"

          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,

          }),
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "#7ad76a",
            neutral80: "#7ad76a",
          },
        })}
        options={options}
        components={{
          IndicatorSeparator: () => null
        }}
        isSearchable={false}
        defaultValue={options[0]}
      />
    </div>
  );
};
export default HeaderDropDown;
