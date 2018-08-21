import React from 'react';
// import Alert from 'react-bootstrap/lib/Alert';
// import Link from 'react-router/lib/Link';
//Components
import styles from './Main.scss';

class Spoon extends React.Component {
    
    render() {
        return <div className={'row ' + styles.content}>
            <div className='col-12'>
                <h1>Spoon</h1>
                <img src='/images/img.jpg' className='img-fluid'></img>
                <p>
                    Датская компания Maersk, мировой лидер на рынке контейнерных перевозок, в ближайшее время организует тестовый рейс контейнеровоза по Северному морскому пути, сообщает Financial Times со ссылкой на заявление представителя компании.

                    Задачей рейса будет проверка возможности использовать путь, проходящий в водах российской Арктики в качестве альтернативы торговому пути из Азии в Европу, проходящему через Суэцкий канал. «Пробный проход позволит нам изучить возможность контейнерных перевозок по Северному морскому пути и собрать необходимые данные», — заявили в компании. Грузом судна станет замороженная рыба, отдельные грузы общего назначения и прочая замороженная продукция.
                </p>
            </div>
        </div>;
    }
}

export default Spoon;