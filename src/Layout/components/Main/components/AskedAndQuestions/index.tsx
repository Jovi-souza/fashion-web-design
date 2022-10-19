import { CaretUp } from "phosphor-react";
import { Content, QuestionsContainer, Root, Trigger } from "./styles";
import * as Accordion from '@radix-ui/react-accordion';

export function Questions() {
  return(
    <QuestionsContainer>
      <h1>Frequently asked questions</h1>
      <div>
        <div>
          <Root type="multiple">
            <div>
              <Accordion.Item value="item-01">
                <Accordion.Header>
                  <Trigger>How many shows i can watch at a time? <CaretUp size={14} weight={'bold'} /></Trigger>
                </Accordion.Header>
                <Content>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
                </Content>
              </Accordion.Item>
              <Accordion.Item value="item-02">
                <Accordion.Header>
                  <Trigger>How many shows i can watch at a time?<CaretUp size={14} weight={'bold'} /></Trigger>
                </Accordion.Header>
                <Content>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
                </Content>
              </Accordion.Item>
              <Accordion.Item value="item-03">
                <Accordion.Header>
                  <Trigger>How many shows i can watch at a time?<CaretUp size={14} weight={'bold'}/></Trigger>
                </Accordion.Header>
                <Content>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
                </Content>
              </Accordion.Item>
            </div>
            <div>
              <Accordion.Item value="item-04">
                <Accordion.Header>
                  <Trigger>How many shows i can watch at a time? <CaretUp size={14} weight={'bold'} /></Trigger>
                </Accordion.Header>
                <Content>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
                </Content>
              </Accordion.Item>
              <Accordion.Item value="item-05">
                <Accordion.Header>
                  <Trigger>How many shows i can watch at a time?<CaretUp size={14} weight={'bold'} /></Trigger>
                </Accordion.Header>
                <Content>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
                </Content>
              </Accordion.Item>
              <Accordion.Item value="item-06">
                <Accordion.Header>
                  <Trigger>How many shows i can watch at a time?<CaretUp size={14} weight={'bold'}/></Trigger>
                </Accordion.Header>
                <Content>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
                </Content>
              </Accordion.Item>
            </div>
          </Root>
        </div>
      </div>
    </QuestionsContainer>
  )
}