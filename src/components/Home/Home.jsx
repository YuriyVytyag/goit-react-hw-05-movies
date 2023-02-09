import { List, Title, LinkStyled } from './Home.styled';
import { useState, useEffect } from 'react';
import { getTrend } from 'components/helpers/Api';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [trend, setTrend] = useState([]);
  const location = useLocation();
  useEffect(() => {
    try {
      getTrend().then(res => {
        console.log('🚀 ~ res', res);
        return setTrend(res.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <Title>Trending today</Title>
      <List>
        {trend.map(({ id, title, name }) => (
          <li key={id}>
            <LinkStyled to={`movies/${id}`} state={{ from: location }}>
              {title || name}
            </LinkStyled>
          </li>
        ))}
      </List>
    </div>
  );
};

export default Home;
