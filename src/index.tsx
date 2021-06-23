import * as React from 'react'

interface Props {
  content: any
}

export const Questionnaire = ({ content }: Props) => {
  const questions = content.questions
    .slice(1)
    .map((q: any) => <li key={q.id}>{q.title.en}</li>)
  return (
    <div>
      <p>
        The new render still needs implementing. These are the questions from
        the questionnnaire we were given:
      </p>
      <ul>{questions}</ul>
    </div>
  )
}
