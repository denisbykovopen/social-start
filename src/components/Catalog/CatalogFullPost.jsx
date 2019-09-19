import React from 'react';
import ContactModal from '../Modals/ContactModal';
import withModal from '../../hoc/withModal';

import momcat from '../../assets/momcat.png';
import dadcat from '../../assets/dadcat.png';

const ContactButton = props => (
  <button
    onClick={props.toggleModal}
    className="catalog-fullpost-contact"
  >
    Связаться
  </button>
);

const ContactButtonWithModal = withModal(ContactButton)(ContactModal);

export default class extends React.Component {
  state = {
    isFullDescription: false,
  };

  toggleDescription = () => {
    this.setState({
      isFullDescription: !this.state.isFullDescription,
    });
  };

  render() {
    const { isFullDescription } = this.state;
    return (
      <div className="catalog-post-container">
        <div>Photos</div>
        <div className="catalog-fullpost-description">
          <div className="catalog-fullpost-description-header">
            <div>
              <h2>Алекс</h2>
              <span className="catalog-post-description-header-subtitle">
                шотландский вислоухий
              </span>
            </div>
            <div>
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
              >
                <path
                  d="M10.0778 2.9462L10.503 3.62815L10.9269 2.94539C11.8367 1.48002 13.465 0.5 15.3312 0.5C18.1887 0.5 20.5 2.79422 20.5 5.60787C20.5 7.14047 19.8113 8.51485 18.725 9.45462L18.7123 9.46559L18.7004 9.47738L10.662 17.4337C10.6206 17.4746 10.5601 17.5 10.4979 17.5C10.4357 17.5 10.3751 17.4746 10.3338 17.4337L2.29957 9.4816L2.28734 9.46949L2.27431 9.45826C1.18505 8.51924 0.5 7.14544 0.5 5.61209C0.5 2.79398 2.81157 0.5 5.66876 0.5C7.5348 0.5 9.16363 1.47993 10.0778 2.9462Z"
                  stroke="black"
                />
              </svg>
            </div>
          </div>
          <div className="catalog-fullpost-description-info">
            <div className="catalog-fullpost-description-info-parameters">
              <div className="catalog-post-description-info-parameter">
                <div>
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M9.9961 11.9993H2.22985C1.49273 11.9993 0.896484 11.4439 0.896484 10.7572V9.22918C0.896484 8.5425 1.49273 7.98706 2.22985 7.98706H9.9961C10.7332 7.98706 11.3295 8.5425 11.3295 9.22918V10.7572C11.3295 11.4439 10.7332 11.9993 9.9961 11.9993Z"
                      fill="#E3E3E3"
                    />
                    <path
                      d="M9.16847 8.98314H3.05761C2.47395 8.98314 2.00098 8.54254 2.00098 7.99882V6.07002C2.00098 5.5263 2.47395 5.08569 3.05761 5.08569H9.16847C9.75213 5.08569 10.2251 5.5263 10.2251 6.07002V7.99882C10.2251 8.54254 9.75213 8.98314 9.16847 8.98314Z"
                      fill="#E3E3E3"
                    />
                    <path
                      d="M6.53201 7.05436H5.69677C5.67916 7.05436 5.66406 7.0403 5.66406 7.0239V3.6772C5.66406 3.66079 5.67916 3.64673 5.69677 3.64673H6.53201C6.54962 3.64673 6.56472 3.66079 6.56472 3.6772V7.0239C6.56472 7.0403 6.54962 7.05436 6.53201 7.05436Z"
                      fill="#E3E3E3"
                    />
                    <path
                      d="M7.48245 2.59425C7.48245 3.29968 6.8686 3.87152 6.11134 3.87152C5.35409 3.87152 4.74023 3.29968 4.74023 2.59425C4.74023 2.06224 5.52265 0.731065 5.90505 0.110004C5.99562 -0.0376445 6.22455 -0.0376445 6.31764 0.110004C6.70004 0.731065 7.48245 2.06224 7.48245 2.59425Z"
                      fill="#E3E3E3"
                    />
                  </svg>
                </div>
                <span className="catalog-post-description-info-parameter-title">
                  3 месяца
                </span>
              </div>
              <div className="catalog-post-description-info-parameter">
                <div>
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                  >
                    <path
                      d="M14.0961 3.83668L12.1731 0.63012C12.0611 0.433399 11.8744 0.295694 11.6503 0.236678C11.4263 0.197334 11.2022 0.236678 11.0155 0.354711L7.99093 2.38094C7.59886 2.63668 7.48683 3.1875 7.72955 3.60061C7.84157 3.79733 8.02827 3.93504 8.25232 3.99405C8.47636 4.05307 8.70041 4.01373 8.88711 3.87602L10.2314 2.99078L9.76462 5.15471C8.23365 5.19405 6.92672 6.33504 6.59066 7.90881C6.17991 9.817 7.3188 11.7055 9.12983 12.1383C9.37254 12.1973 9.61525 12.217 9.87664 12.217C10.5114 12.217 11.1276 12.0203 11.669 11.6662C12.4345 11.1547 12.9572 10.3678 13.1439 9.46291C13.48 7.86946 12.7519 6.25635 11.3889 5.52848L11.8557 3.36455L12.6959 4.78094C12.8079 4.97766 12.9946 5.11537 13.2186 5.17438C13.4427 5.2334 13.6667 5.19405 13.8534 5.05635C14.2268 4.78094 14.3389 4.24979 14.0961 3.83668ZM9.85797 6.88586C9.98866 6.88586 10.1007 6.90553 10.2314 6.9252C10.6795 7.02356 11.0529 7.29897 11.2956 7.71209C11.5383 8.10553 11.613 8.59733 11.5196 9.04979C11.4263 9.52192 11.1649 9.91536 10.7728 10.1711C10.3994 10.4268 9.93265 10.5055 9.50323 10.4072C8.58838 10.1908 8.02827 9.22684 8.23365 8.28258C8.38301 7.45635 9.07381 6.88586 9.85797 6.88586Z"
                      fill="#E3E3E3"
                    />
                    <path
                      d="M5.39573 8.32184H4.63025V7.90872C6.25457 7.47593 7.41213 5.92184 7.41213 4.13167C7.41213 1.96774 5.75047 0.216919 3.7154 0.216919C1.68033 0.216919 0 1.96774 0 4.13167C0 5.92184 1.15756 7.47593 2.78188 7.90872V8.32184H2.0164C1.5123 8.32184 1.08288 8.75462 1.08288 9.30544C1.08288 9.85626 1.49363 10.2891 2.0164 10.2891H2.78188V11.2333C2.78188 11.7645 3.19263 12.2169 3.7154 12.2169C4.23817 12.2169 4.64892 11.7841 4.64892 11.2333V10.2694H5.4144C5.9185 10.2694 6.34792 9.83659 6.34792 9.28577C6.34792 8.73495 5.9185 8.32184 5.39573 8.32184ZM5.56376 4.13167C5.56376 5.21364 4.74227 6.07921 3.7154 6.07921C2.68853 6.07921 1.86703 5.19397 1.86703 4.13167C1.86703 3.06938 2.68853 2.18413 3.7154 2.18413C4.74227 2.18413 5.56376 3.04971 5.56376 4.13167Z"
                      fill="#E3E3E3"
                    />
                  </svg>
                </div>
                <span className="catalog-post-description-info-parameter-title">
                  самец
                </span>
              </div>
              <div className="catalog-post-description-info-parameter">
                <div>
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 11 13"
                    fill="none"
                  >
                    <path
                      d="M5.60118 0C2.97246 0 0.845703 2.14008 0.845703 4.78528C0.845703 5.47648 0.991009 6.12781 1.2552 6.73926C2.44407 9.35787 4.71613 12.1227 5.38983 12.907C5.44266 12.9601 5.50871 13 5.58797 13C5.66723 13 5.73328 12.9601 5.78612 12.907C6.45981 12.1227 8.73187 9.35787 9.92074 6.73926C10.1981 6.12781 10.3302 5.47648 10.3302 4.78528C10.3434 2.14008 8.21669 0 5.60118 0ZM5.60118 7.27096C4.24059 7.27096 3.13097 6.1544 3.13097 4.78528C3.13097 3.41616 4.24059 2.29959 5.60118 2.29959C6.96178 2.29959 8.07139 3.41616 8.07139 4.78528C8.07139 6.1544 6.96178 7.27096 5.60118 7.27096Z"
                      fill="#E3E3E3"
                    />
                  </svg>
                </div>
                <span className="catalog-post-description-info-parameter-title">
                  Германия, Берлин
                </span>
              </div>
            </div>
            <div className="catalog-fullpost-description-info-parents">
              <div className="catalog-fullpost-description-info-parent">
                <img src={momcat} alt="mom" />
                <span className="catalog-fullpost-description-info-parent-name">
                  Мама
                </span>
              </div>
              <div style={{ marginBottom: 15 }}>
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                >
                  <path
                    d="M8.76071 0C7.59164 0 6.57114 0.59733 6.00122 1.48981C5.42886 0.59733 4.40836 0 3.23929 0C1.45159 0 0 1.39611 0 3.11783C0 4.05481 0.431094 4.89342 1.11305 5.46498L5.70408 9.88288C5.78202 9.95784 5.88918 10 5.99878 10C6.10838 10 6.21555 9.95784 6.29348 9.88288L10.8869 5.46264C11.5665 4.89108 12 4.05247 12 3.11548C12 1.39611 10.5484 0 8.76071 0Z"
                    fill="#AEAEAE"
                  />
                </svg>
              </div>
              <div className="catalog-fullpost-description-info-parent">
                <img src={dadcat} alt="dad" />
                <span className="catalog-fullpost-description-info-parent-name">
                  Папа
                </span>
              </div>
            </div>
          </div>
          <div onClick={this.toggleDescription}>
            {isFullDescription ? (
              <p className="catalog-fullpost-description-text">
                Чудный мальчик с хорошим характером. Безумно ручной и
                игривый. Приучен к лоточку, когтеточке и натуральной
                еде. Чудный мальчик с хорошим характером. Безумно
                ручной и игривый. Приучен к лоточку, когтеточке и
                натуральной еде.
              </p>
            ) : (
              <p
                className="catalog-fullpost-description-text"
                style={{
                  overflow: 'hidden',
                  maxHeight: '50px',
                }}
              >
                Чудный мальчик с хорошим характером. Безумно ручной и
                игривый. Приучен к лоточку, когтеточке и натуральной
                еде. Чудный мальчик с хорошим характером. Безумно
                ручной и игривый. Приучен к лоточку, когтеточке и
                натуральной еде.
                <span className="catalog-fullpost-description-text-gradient"></span>
              </p>
            )}
          </div>
          <ContactButtonWithModal />
        </div>
      </div>
    );
  }
}
