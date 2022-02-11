import React from "react";

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
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import Loader from "react-loader-spinner";

const SupportPage = () => {
  const contactFormTopics = ["Support", "Integrate", "Career", "Others"];

  const [contactFormProcessing, setContactFormProcessing] = React.useState(0);
  const [contactFormName, setContactFormName] = React.useState("");
  const [contactFormEmail, setContactFormEmail] = React.useState("");
  const [contactFormTopic, setContactFormTopic] = React.useState(
    contactFormTopics[0]
  );
  const [contactFormSub, setContactFormSub] = React.useState("");
  const [contactFormMsg, setContactFormMsg] = React.useState("");
  const [contactFormError, setContactFormError] = React.useState("");

  const handleContactFormSubmit = () => {};

  return (
    <Section id="contact" theme="#35c5f3" padding="20px 0px 80px 0px">
      <Content className="contentBox">
        <Item align="stretch" justify="flex-start" margin="0px 20px">
          <Item
            align="flex-end"
            tabletAlign="flex-start"
            margin="0px 0px 20px 0px"
            textAlign="right"
            tabletTextAlign="left"
          >
            <H2 textTransform="uppercase" spacing="0.1em">
              <Span bg="#fff" color="#000" weight="600" padding="0px 8px">
                Contact
              </Span>
              <Span weight="200" color="#fff">
                {" "}
                Us!
              </Span>
            </H2>
            <H3 color="#fff">Get in Touch</H3>
          </Item>

          <Item margin="10px -10px" self="stretch">
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
                        <Input
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
                        <Input
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
                      <Input
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
                      <TextField
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
                          size="0.8em"
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
      <WaveOuter>
        <WaveInner>
          <Wave
            fill="#fff"
            paused={true}
            options={{
              height: 20,
              amplitude: 30,
              speed: 0.35,
              points: 3,
            }}
          />
        </WaveInner>
      </WaveOuter>
    </Section>
  );
};

// CSS Styles
const DropdownStyled = styled(Dropdown)`
  .Dropdown-control {
    background-color: #000;
    color: #fff;
    padding: 12px 52px 12px 10px;
    border: 1px solid #000;
    border-radius: 4px;
  }

  .Dropdown-placeholder {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2em;
    font-size: 0.8em;
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

export { SupportPage };