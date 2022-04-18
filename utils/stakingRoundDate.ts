import moment from 'moment';
import 'moment-timezone';

export interface IStakingPoolRound {
  startedAt: moment.Moment;
  endedAt: moment.Moment;
}

const format = 'YYYY.MM.DD hh:mm:ss Z';

const stakingRoundDate: IStakingPoolRound[] = [
  {
    startedAt: '2021.7.27 19:00:00 +9:00',
    endedAt: '2021.8.16 19:00:00 +9:00',
  },
  {
    startedAt: '2021.8.26 19:00:00 +9:00',
    endedAt: '2021.9.15 19:00:00 +9:00',
  },
  {
    startedAt: '2021.9.25 19:00:00 +9:00',
    endedAt: '2021.11.04 19:00:00 +9:00',
  },
  {
    startedAt: '2021.11.05 19:00:00 +9:00',
    endedAt: '2021.12.15 19:00:00 +9:00',
  },
  {
    startedAt: '2021.12.16 19:00:00 +9:00',
    endedAt: '2022.01.25 19:00:00 +9:00',
  },
  {
    startedAt: '2022.01.26 19:00:00 +9:00',
    endedAt: '2022.03.07 19:00:00 +9:00',
  },
  {
    startedAt: '2022.03.08 19:00:00 +9:00',
    endedAt: '2022.04.17 19:00:00 +9:00',
  },
].map((item) => {
  return {
    startedAt: moment(item.startedAt, format).tz('Asia/Seoul', true),
    endedAt: moment(item.endedAt, format).tz('Asia/Seoul', true),
  };
});

export default stakingRoundDate;
