import React from "react";
import { Button, Content, FormSubmision, H3, Input, Item, ItemH, Section, Span, TextField } from "primaries/SharedStyling";
import { FiLink } from "react-icons/fi";
import styled, { useTheme } from "styled-components";
import Dropdown from "react-dropdown";
import Loader from "react-loader-spinner";
import "./createChannel.css";

const coreChain = "Ethereum Kovan";

const ALIAS_CHAINS = [
  { value: coreChain, label: coreChain },
  { value: "POLYGON_TEST_MUMBAI:80001", label: "Polygon" },
];

const ChannelInfo = ({
  channelName,
  channelAlias,
  channelInfo,
  channelURL,
  chainDetails,
  setChannelAlias,
  setChainDetails,
  setChannelInfo,
  setChannelName,
  setChannelURL,
  setStepFlow,
  setProcessingInfo,
  setProcessing,
  setChannelInfoDone,
}) => {
  const themes = useTheme();

  const isEmpty = (field) => {
    if (field.trim().length == 0) {
      return true;
    }

    return false;
  };

  const isAllFilled = () => {
    if (
      isEmpty(channelName) ||
      isEmpty(channelInfo) ||
      isEmpty(channelURL) ||
      (channelAlias
      ? isEmpty(chainDetails)
      : chainDetails
        ? chainDetails == coreChain
          ? false
          : isEmpty(channelAlias)
        : false)
    ) {
      setProcessing(3);
      setProcessingInfo("Channel Fields are Empty! Please retry!");

      setTimeout(() => {
        setProcessing(2);
        setProcessingInfo("");
      }, 5000);

      return false;
    }

    return true;
  }

  return (
    <Section>
      <Content padding="50px 0px 0px 0px">
        <Item align="flex-start" margin="0px 20px">
          <H3 color="#e20880">Setup your Channel Info</H3>
        </Item>

        {/* <FormSubmision
          flex="1"
          direction="column"
          margin="0px"
          justify="center"
          size="1.1rem"
          onSubmit={handleCreateChannel}
        > */}
          <Item
            margin="-10px 20px 15px 20px"
            flex="1"
            self="stretch"
            align="stretch"
          >
            <InputDiv border="1px solid black">
              <Input
                required
                placeholder="Your Channel Name"
                maxlength="40"
                maxllength="100%"
                padding="12px"
                weight="400"
                size="1em"
                bg="#fff"
                value={channelName}
                onChange={(e) => {
                  setChannelName(e.target.value);
                }}
              />
            </InputDiv>

            {channelName.trim().length == 0 && (
              <Span
                padding="4px 10px"
                right="0px"
                top="0px"
                pos="absolute"
                color="#fff"
                bg="#000"
                size="0.7rem"
                z="1"
              >
                Channel's Name
              </Span>
            )}
          </Item>

          <Item
            margin="15px 20px 15px 20px"
            flex="1"
            self="stretch"
            align="stretch"
            direction="row"
            height="20px"
            style={{ position: "relative" }}
          >
            
            {/* dropdown */}
            <DropdownStyledParent>
              <DropdownStyled
                options={ALIAS_CHAINS}
                onChange={(option) => {
                    setChainDetails(option.value);
                    console.log(option);
                }}
                value={chainDetails}
              />
            </DropdownStyledParent>

            <span
              className="imgSpan"
              data-tooltip="When sending notifications to Non-Ethereum Chains, the Channel Alias address will act as a native representation of your Channel on that blockchain."
            >
              <img
                className="iImage"
                src="/svg/info.svg"
                style={{
                  width: "20px",
                  height: "20px",
                  marginTop: "0px",
                  marginBottom: "-2px",
                }}
              />

              {/* <span className="test">When sending notifications to Non-Ethereum Chains, the Channel Alias address will act as a native representation of your channel on that Blockchain <a href="">read more</a></span> */}
              </span>
              <Span
                padding="4px 10px"
                right="0px"
                top="0px"
                pos="absolute"
                color="#fff"
                bg="#000"
                size="0.7rem"
                z="1"
              >
                Choose Channel's Activation Network
              </Span>

          </Item>
            
            {chainDetails != coreChain &&
              <Item
                margin="55px 20px 15px 20px"
                flex="1"
                self="stretch"
                align="stretch"
                style={{ position: "relative" }}
              >
                <InputDiv
                  border={() => {
                    if (themes.scheme == "dark") return "1px solid white";
                    else return "1px solid black";
                  }}
                >
                  <Input
                    placeholder="Your Channel's Alias address"
                    maxlength="40"
                    maxllength="100%"
                    padding="12px"
                    weight="400"
                    size="1rem"
                    bg="white"
                    disabled={
                      chainDetails === "" || chainDetails === coreChain
                        ? true
                        : false
                    }
                    visibility={
                      chainDetails === coreChain ? "hidden" : "visible"
                    }
                    value={channelAlias}
                    onChange={(e) => {
                      setChannelAlias(e.target.value);
                    }}
                  />
                </InputDiv>
                <Span
                  padding="4px 10px"
                  right="0px"
                  top="0px"
                  pos="absolute"
                  color="#fff"
                  bg="#000"
                  size="0.7rem"
                >
                  Make sure you own this address as verification will take place.
                </Span>
              </Item>
            }

          <Item
            margin="0px 20px 15px 20px"
            flex="1"
            self="stretch"
            align="stretch"
            style={{marginTop: `${chainDetails === coreChain ? "55px" : "20px"}`, position: "relative"}}
          >
            <TextField
              required
              placeholder="Your Channel's Short Description (250 Characters)"
              rows="4"
              maxlength="250"
              radius="4px"
              padding="12px"
              weight="400"
              border="1px solid #000"
              bg="#fff"
              value={channelInfo}
              onChange={(e) => {
                setChannelInfo(e.target.value.slice(0, 250));
              }}
              autocomplete="off"
            />

            <SpanR>
              <span
                style={{padding: "15px"}}
              >
                {250 - channelInfo.length} characters remains
              </span>
            </SpanR>
            <Span
                padding="4px 10px"
                right="0px"
                top="0px"
                pos="absolute"
                color="#fff"
                bg="#000"
                size="0.7rem"
              >
                Channel's Description
              </Span>
          </Item>

          <ItemH
            margin="15px 20px 15px 20px"
            flex="1"
            self="stretch"
            align="center"
          >
            <Item flex="0" margin="0px 5px 0px 0px">
              <FiLink size={24} color={themes.color} />
            </Item>
            <Item flex="1" margin="0px 0px 0px 5px" align="stretch">
              <Input
                required
                placeholder="Call to Action Link"
                padding="12px"
                border="1px solid #000"
                radius="4px"
                weight="400"
                bg="#f1f1f1"
                value={channelURL}
                onChange={(e) => {
                  setChannelURL(e.target.value);
                }}
              />
              {channelURL.trim().length == 0 && (
                <Span
                  padding="4px 10px"
                  right="0px"
                  top="0px"
                  pos="absolute"
                  color="#fff"
                  bg="#000"
                  size="0.7rem"
                  z="1"
                >
                  Channel's Website URL
                </Span>
              )}
            </Item>
        </ItemH>
        
          <Item self="stretch" align="stretch" margin="20px 0px 0px 0px">
            <Button
              bg="#e20880"
              color="#fff"
              flex="1"
              radius="0px"
              padding="20px 10px"
              onClick={() => {
                if (!isAllFilled()) return;
                setChannelInfoDone(true);
                setStepFlow(3);
              }}
            >
              <Span
                color="#fff"
                weight="400"
                textTransform="uppercase"
                spacing="0.1em"
              >
                Continue
              </Span>
            </Button>
          </Item>

          {/* <Item
            margin="15px 0px 0px 0px"
            flex="1"
            self="stretch"
            align="stretch"
          >
            <Button
              bg="#e20880"
              color="#fff"
              flex="1"
              radius="0px"
              padding="20px 10px"
              disabled={processing == 1 ? true : false}
            >
              {processing == 1 && (
                <Loader
                  type="Oval"
                  color="#fff"
                  height={24}
                  width={24}
                />
              )}
              {processing != 1 && (
                <Input
                  cursor="hand"
                  textTransform="uppercase"
                  color="#fff"
                  weight="400"
                  size="0.8em"
                  spacing="0.2em"
                  type="submit"
                  value="Setup Channel"
                />
              )}
            </Button>
          </Item> */}
        {/* </FormSubmision> */}
      </Content>
    </Section>
  );
};

const InputDiv = styled.div`
  display: ${(props) => props.display || "flex"};
  flex: 1;
  border: ${(props) => props.border || "none"};
  margin-bottom: ${(props) => props.marginBottom || "none"};
  width: ${(props) => props.width || "none"};
  visibility: ${(props) => props.visibility || ""};
`;

const SpanR = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0.8rem;
  color: white;
  z-index: 1;
  margin-bottom: 5px;
  padding: 5px;
  background: #e20880;
  border-radius: 20px;
  align-items: center;
  font-size: 16px;
`;

const DropdownStyledParent = styled.div`
flex:1;
.is-open {
    margin-bottom: 130px;
}
`

const DropdownStyled = styled(Dropdown)`
  .Dropdown-control {
      background-color: #fff;
      color: #000;
      border: 1px solid black;
      width:100%;
      outline: none;
      height: 59px;
      display: flex;
      align-items: center;
  }
  .Dropdown-arrow {
      top: 30px;
      bottom: 0;
      border-color: #f #000 #000;
  }
  .Dropdown-menu {
    border-color: #000;
      .is-selected {
      background-color: #D00775;
      color:#fff;
    }
  }
 
  .Dropdown-option {
      background-color: #fff;
      color: #000;
  }
  .Dropdown-option:hover {
      background-color: #D00775;
      color: #000;
  }
`;

export default ChannelInfo;