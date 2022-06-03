import { useTranslation } from 'react-i18next';
import { MainTeamWrapper } from './styles';
import member1 from 'assets/images/main/ELY_서동욱@2x.webp';
import member2 from 'assets/images/main/ELY_이재복@2x.webp';
import member3 from 'assets/images/main/ELY_이종현@2x.webp';
import member4 from 'assets/images/main/ELY_이현민@2x.webp';
import member5 from 'assets/images/main/ELY_임정건@2x.webp';
import member6 from 'assets/images/main/ELY_차원준@2x.webp';
import Image from 'next/image';

const Team = () => {
  const { t } = useTranslation();
  const teamArray = [member5, member6, member1, member4, member2, member3];

  return (
    <MainTeamWrapper>
      <h2>{t('main.developers.0')}</h2>
      <h3>{t('main.developers.1')}</h3>
      <section>
        {teamArray.map((team, index) => {
          return (
            <figure>
              <Image
                src={team}
                alt="Members"
                width={148}
                height={148}
                key={`member_${index}`}
              />
            </figure>
          );
        })}
      </section>
    </MainTeamWrapper>
  );
};

export default Team;
