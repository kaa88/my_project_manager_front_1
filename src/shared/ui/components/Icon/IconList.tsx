// development only

import { Icon, icons } from "./Icon";

export const IconList = (): JSX.Element => {
  return (
    <div style={{ width: "100%", background: "#eee" }}>
      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          color: "#222",
          marginBottom: "6px",
        }}
      >
        ICONS
      </p>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 100px)",
          columnGap: "5px",
          justifyContent: "center",
        }}
      >
        {Object.keys(icons).map((key) => {
          const iconName = key as keyof typeof icons;
          return (
            <div
              key={key}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  border: "solid 1px green",
                  color: "#222",
                  fill: "#222",
                }}
              >
                <Icon name={iconName} />
              </div>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1,
                  textAlign: "center",
                  color: "#222",
                }}
              >
                {key}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
