import * as Options from "./style/GetAllOption.style";

const GetAllOption = ({ options }) => {
  return (
    <Options.Container>
      {options.map((option, index) => {
        const optionName = Object.keys(option)[0];
        const optionValues = Object.entries(option[optionName]);

        return (
          <Options.Content key={index}>
            <p>{optionName}</p>
            <Options.Ul>
              {optionValues.map(([key, value]) => (
                <li key={key}>
                  {key}({value})
                </li>
              ))}
            </Options.Ul>
          </Options.Content>
        );
      })}
    </Options.Container>
  );
};

GetAllOption.defaultProps = {
  options: [
    {
      얼음: {
        많이: 0,
        보통: 0,
        조금: 0,
      },
    },
    {
      휘핑: {
        많이: 0,
        보통: 0,
        조금: 0,
      },
    },
    {
      시럽: {
        바닐라: 600,
        헤이즐넛: 600,
        카라멜: 600,
      },
    },
    {
      우유: {
        무지방: 0,
        저지방: 0,
        일반: 0,
        오트: 0,
        두유: 0,
      },
    },
  ],
};

export default GetAllOption;