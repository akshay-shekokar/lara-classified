import React, { useState } from "react";
import { Icon, Menu, Segment, Dropdown } from "semantic-ui-react";
import { ADS_TYPE, SEARCH_TYPE, doNothing } from "../../constants";

const SearhcResultTabs = () => {
  const [activeItem, setActiveItem] = useState(ADS_TYPE.ALL_ADS);
  return (
    <div>
      <Menu attached="top" tabular>
        {Object.values(ADS_TYPE).map((type) => (
          <Menu.Item
            name={type}
            key={type}
            color="orange"
            active={activeItem === type}
            onClick={() => setActiveItem(type)}
          />
        ))}
        <Menu.Menu position="right">
          <Menu.Item onClick={doNothing}>
            <Icon name="grid layout" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Segment attached="bottom">
        <Menu size="mini">
          <Menu.Item name="filters" onClick={doNothing}>
            <Icon name="content" /> FILTERS
          </Menu.Item>
          <Dropdown item text="SORT BY">
            <Dropdown.Menu>
              {Object.values(SEARCH_TYPE).map(({ id, label }) => (
                <Dropdown.Item key={id}>{label}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </Segment>
    </div>
  );
};

export default SearhcResultTabs;
