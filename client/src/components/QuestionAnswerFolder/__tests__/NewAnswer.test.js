import React from 'react'
import ReactDOM from 'react-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import { describe, expect, test } from '@jest/globals'
import userEvent from '@testing-library/user-event';
import NewAnswer from '../NewAnswer'

const itemName = 'test'
const questionId  = 0;
const question = {question_body : 'test'}

describe('New Answer', function () {
  // const user = userEvent.setup();
  // const { getByTestId, getAllByTestId } =

  beforeEach(() => {
    render(<NewAnswer itemName={itemName} questionId={questionId} questionBody={question.question_body} />);
  })

  test('should render the Answer Form', () => {
    const answerFormElement = screen.getByTestId('newAnswerForm');
    expect(answerFormElement).toBeTruthy();
  });

})
