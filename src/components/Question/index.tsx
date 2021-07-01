import { ReactNode } from 'react';

import cx from 'classnames';

import * as S from './style';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  content,
  author,
  children = null,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps): JSX.Element {
  return (
    <S.Question isHighlighted={isHighlighted} isAnswered={isAnswered}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </S.Question>
  );
}
