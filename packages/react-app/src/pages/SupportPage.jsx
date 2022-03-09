import React, { useState } from "react";

import {
  Section,
  Content,
  Item,
  ItemH,
  WaveOuter,
  WaveInner,
  H2,
  H3,
  Span,
  Button,
  FormSubmision,
  Input,
  TextField,
} from "components/SharedStyling";
import Wave from "react-wavify";
import Dropdown from "react-dropdown";
import styled, { useTheme } from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import Loader from "react-loader-spinner";

import {ThemeProvider} from "styled-components";
import { themeLight, themeDark } from "config/Themization";

// HELPER METHODS
const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isEmpty = (field) => {
  if (field.trim().length === 0) {
    return true;
  }

  return false;
};

const SupportPage = () => {
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

  const themes = useTheme();
  const [darkMode, setDarkMode] = useState(false);

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
					"https://backend-kovan.epns.io/apis/mailing/send_mail",
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
    <ThemeProvider theme={themes}>
    <Section id="contact" theme={themes.mainBg}>
      <Content className="contentBox" padding="10px 0">
        <Item align="stretch" justify="flex-start" margin="0px 20px">
            <Item align="stretch" align="flex-end" tabletAlign="flex-start" margin="0px 16px 0px 0px" textAlign="right" tabletTextAlign="left">
              <H2 textTransform="uppercase" spacing="0.1em" bg="#fff">
                <Span color={themes.color} weight="600" padding="0px">Contact US!</Span>
                {/* <Span weight="200" color="#000"> Us!</Span> */}
              </H2>
              <H3 bg="#fff" color={themes.color}>Get in Touch</H3>
            </Item>
          <Item self="stretch">
            <FormSubmision
              flex="1"
              direction="row"
              justify="stretch"
              margin="10px"
              size="1.1rem"
              onSubmit={handleContactFormSubmit}
            >
              <Item align="stretch" justify="stretch" margin="10px -15px">
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
                      border={themes.buttonBd}
                      flex="1"
                      radius="4px"
                      disabled={contactFormProcessing}
                      margin="15px"
                      padding="12px 15px"
                    >
                      {contactFormProcessing === 1 && (
                        <Loader
                          type="Oval"
                          color="#fff"
                          height={24}
                          width={24}
                        />
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
          </Item>
        </Item>
      </Content>
    </Section>
    </ThemeProvider>
  );
};

// CSS Styles
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

export { SupportPage };