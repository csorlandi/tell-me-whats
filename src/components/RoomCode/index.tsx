import copyImg from '../../assets/images/copy.svg';

import * as S from './style';

type RoomCodeProps = {
  code: string;
};

export function RoomCode({ code }: RoomCodeProps): JSX.Element {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <S.RoomCode
      type="button"
      className="room-code"
      onClick={copyRoomCodeToClipboard}
    >
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{code}</span>
    </S.RoomCode>
  );
}
