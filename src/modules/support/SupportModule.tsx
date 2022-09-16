// React + Web3 Essentials
import React from "react";

// External Packages
import Dropdown from "react-dropdown";
import ReactGA from "react-ga";
import { FaCheckCircle } from "react-icons/fa";
import styled, { useTheme } from "styled-components";

// Internal Compoonents
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2 } from "components/reusables/SharedStylingV2";
import {
  Button, Content, FormSubmision, H2,
  H3, Input, Item,
  ItemH, Section, Span, TextField
} from "../../primaries/SharedStyling";

// Internal Configs
import GLOBALS, { device, globalsMargin } from "config/Globals";


// HELPER METHODS
const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isEmpty = (field) => {
  if (field.trim().length === 0) {
    return true;
  }

  return false;
};

const SupportModule = () => {
  // React GA Analytics
  ReactGA.pageview("/support");

  const contactFormTopics = ["Support", "Integrate", "Others"];

  const [contactFormProcessing, setContactFormProcessing] = React.useState(0);
  const [contactFormName, setContactFormName] = React.useState("");
  const [contactFormEmail, setContactFormEmail] = React.useState("");
  const [contactFormTopic, setContactFormTopic] = React.useState(
    contactFormTopics[0]
  );
  const [contactFormSub, setContactFormSub] = React.useState("");
  const [contactFormMsg, setContactFormMsg] = React.useState("");
  const [contactFormError, setContactFormError] = React.useState("");

  const theme = useTheme();

  const handleContactFormSubmit = (e) => {
    e.preventDefault();

    // Check everything in order
    if (validateEmail(contactFormEmail)) {
      if (isEmpty(contactFormName)) {
        setContactFormError("Name can't be empty");
        setContactFormProcessing(0);
      } else if (isEmpty(contactFormSub)) {
        setContactFormError("Subject can't be empty");
        setContactFormProcessing(0);
      } else if (isEmpty(contactFormMsg)) {
        setContactFormError("Message can't be empty");
        setContactFormProcessing(0);
      } else {
        setContactFormProcessing(1);

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            from: contactFormEmail,
            name: contactFormName,
            topic: contactFormTopic,
            sub: contactFormSub,
            msg: contactFormMsg,
          }),
        };

        fetch(
          "https://backend-kovan.epns.io/apis/mailing/sendMail",
          requestOptions
        )
          .then((response) => response.json())
          .then((jsondata) => {
            // console.log(jsondata);
            setContactFormProcessing(2);
          })
          .catch((err) => {
            // console.log(err);
            setContactFormError(
              "Mayday! Mayday! something went wrong. Please retry..."
            );
            setContactFormProcessing(0);
          });
      }
    } else {
      setContactFormError("Incorrect e-mail, please check and retry!");
      setContactFormProcessing(0);
    }
  };

  return (
    <Container>
      <ItemVV2 alignSelf="stretch" justifyContent="flex-start">
        <ItemVV2 alignSelf="stretch" justifyContent="flex-start">
          <H2>
            <Span weight="400" size="32px" color={theme.color}>
              Support
            </Span>
          </H2>
          <Span
            color={theme.default.secondaryColor}
            weight="400"
            size="16px"
            textTransform="none"
            textAlign="center"
            spacing="0.03em"
            margin="0px 0px"
          >
            Let's get in touch!
          </Span>
        </ItemVV2>


        <ItemVV2 alignSelf="stretch">
          <FormSubmision
            flex="1"
            direction="row"
            self="stretch"
            margin="0px"
            size="1.1rem"
            onSubmit={handleContactFormSubmit}
          >
            <Item self="stretch" align="stretch" justify="stretch" margin="10px -15px">
              {contactFormProcessing === 0 && (
                <>
                  <ItemH align="stretch">
                    <Item
                      flex="1"
                      margin="15px"
                      justify="flex-start"
                      align="stretch"
                      minWidth="280px"
                    >
                      <ContactInput
                        required
                        radius="4px"
                        padding="12px"
                        bg="#fff"
                        border="12px"
                        placeholder="John Wick"
                        value={contactFormName}
                        onChange={(e) => {
                          setContactFormName(e.target.value);
                        }}
                        autocomplete="name"
                        style={{
                        }}
                      />
                      {contactFormName.trim().length === 0 && (
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
                          Name
                        </Span>
                      )}
                    </Item>

                    <Item
                      flex="5"
                      margin="15px"
                      justify="flex-start"
                      align="stretch"
                      minWidth="280px"
                    >
                      <ContactInput
                        required
                        placeholder="john@wick.com"
                        radius="4px"
                        padding="12px"
                        bg="#fff"
                        value={contactFormEmail}
                        onChange={(e) => {
                          setContactFormEmail(e.target.value);
                        }}
                        autocomplete="email"
                      />
                      {contactFormEmail.trim().length === 0 && (
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
                          E-mail
                        </Span>
                      )}
                    </Item>
                  </ItemH>

                  <Item
                    flex="5"
                    justify="flex-start"
                    align="stretch"
                    minWidth="280px"
                    margin="15px"
                  >
                    <DropdownStyled
                      options={contactFormTopics}
                      onChange={(option) => setContactFormTopic(option.value)}
                      value={contactFormTopic}
                      placeholder="Select an option"
                    />
                  </Item>

                  <Item
                    justify="center"
                    align="stretch"
                    minWidth="280px"
                    margin="15px"
                  >
                    <ContactInput
                      required
                      placeholder="I want to tell you guys a secret!"
                      radius="4px"
                      padding="12px"
                      bg="#fff"
                      value={contactFormSub}
                      onChange={(e) => {
                        setContactFormSub(e.target.value);
                      }}
                      autocomplete="on"
                    />
                    {contactFormSub.trim().length === 0 && (
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
                        Subject
                      </Span>
                    )}
                  </Item>

                  <Item
                    justify="center"
                    align="stretch"
                    minWidth="280px"
                    margin="15px"
                  >
                    <ContactTextArea
                      required
                      placeholder="This is where you will tell us that secret, or a bug or whatever is on your mind."
                      rows="6"
                      radius="4px"
                      padding="12px"
                      bg="#fff"
                      value={contactFormMsg}
                      onChange={(e) => {
                        setContactFormMsg(e.target.value);
                      }}
                      autocomplete="off"
                    />
                  </Item>
                </>
              )}

              {contactFormProcessing === 2 && (
                <Item align="center" margin="0px 10px">
                  <ItemH
                    color="#e20880"
                    bg="#000"
                    padding="10px 15px"
                    columnGap="0px"
                    rowGap="0px"
                  >
                    <FaCheckCircle size={24} color="#fff" />
                    <Span
                      padding="0px 0px 0px 8px"
                      color="#fff"
                      textTransform="uppercase"
                      spacing="0.1em"
                    >
                      Message Sent! We will be in Touch :)
                    </Span>
                  </ItemH>
                </Item>
              )}

              {contactFormError && contactFormProcessing === 0 && (
                <Item align="center" margin="0px 10px">
                  <Item
                    color="#e20880"
                    bg="#000"
                    padding="10px 15px"
                    margin="15px"
                  >
                    <Span
                      color="#fff"
                      textTransform="uppercase"
                      spacing="0.1em"
                    >
                      {contactFormError}
                    </Span>
                  </Item>
                </Item>
              )}

              <Item
                justify="stretch"
                self="stretch"
                align="stretch"
                minWidth="280px"
              >
                {contactFormProcessing !== 2 && (
                  <Button
                    bg="#000"
                    color="#fff"
                    border={theme.buttonBd}
                    flex="1"
                    radius="4px"
                    disabled={contactFormProcessing}
                    margin="15px"
                    padding="12px 15px"
                  >
                    {contactFormProcessing === 1 && (
                      <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerColor="#fff" spinnerSize={24} />
                    )}
                    {contactFormProcessing === 0 && (
                      <Input
                        cursor="hand"
                        color="#fff"
                        weight="400"
                        size=".9em"
                        spacing="0.2em"
                        type="submit"
                        value="Submit"
                      />
                    )}
                  </Button>
                )}
              </Item>
            </Item>
          </FormSubmision>
        </ItemVV2>
      </ItemVV2>
    </Container>
  );
};

// CSS Styles
const Container = styled(Section)`
	align-items: center;
	align-self: center;
	background: ${(props) => props.theme.default.bg};
	border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
  max-width: 1200px;
  width: calc(100% - ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} - ${globalsMargin.MINI_MODULES.DESKTOP.LEFT} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG});
  padding: ${GLOBALS.ADJUSTMENTS.PADDING.BIG};
	position: relative;
  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(100% - ${globalsMargin.MINI_MODULES.TABLET.RIGHT} - ${globalsMargin.MINI_MODULES.TABLET.LEFT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT});
  }

  @media ${device.mobileM} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(100% - ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} - ${globalsMargin.MINI_MODULES.MOBILE.LEFT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT});
  }
`;

const DropdownStyled = styled(Dropdown)`
  .Dropdown-control {
    background-color: #000;
    color: #fff;
    padding: 12px 52px 12px 10px;
    border: 1px solid ${props => props.theme.buttonBd};
    border-radius: 4px;
  }

  .Dropdown-placeholder {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2em;
    font-size: 0.8em;
		padding-left: 6px
  }

  .Dropdown-arrow {
    top: 18px;
    bottom: 0;
    border-color: #fff transparent transparent;
  }

  .Dropdown-menu {
    border: 1px solid #000;
    box-shadow: none;
    background-color: #000;
    border-radius: 0px;
    margin-top: -3px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .Dropdown-option {
    background-color: rgb(35 35 35);
    color: #ffffff99;

    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.7em;
    padding: 15px 20px;
  }

  .Dropdown-option:hover {
    background-color: #000000;
    color: #fff;
  }
`;

const ContactInput = styled(Input)`
	background: #FFFFFF;
	border: 1px solid #D4D4D4;
	box-sizing: border-box;
	border-radius: 4px;
`

const ContactTextArea = styled(TextField)`
	background: #FFFFFF;
	border: 1px solid #D4D4D4;
	box-sizing: border-box;
	border-radius: 4px;
`

export { SupportModule };
