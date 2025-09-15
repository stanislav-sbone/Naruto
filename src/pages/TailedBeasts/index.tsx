import { useEffect, useState, type FC } from 'react';
import { getAllBeasts } from '../../services/api';
import type { IBeast } from '../../types/beast';
import Loading from '../../components/Loading';
import { Card, Image, Information, List, Name, Title } from './styles';

const TailtedBeasts: FC = () => {
  const [beasts, setBeasts] = useState<IBeast[] | []>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getAllBeasts();
        setBeasts(res || []);
      } catch (error) {
        console.error(`Ошибка: ${error}`);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <List>
      {beasts.map((beast) => (
        <Card>
          <Image src={beast.image || ''} />
          <div>
            <Name>{beast.name}</Name>
            <Title>Джинчурики:</Title>
            {beast.jinchuriki.map((j) => (
              <Information>{j}</Information>
            ))}
          </div>
        </Card>
      ))}
    </List>
  );
};

export default TailtedBeasts;
