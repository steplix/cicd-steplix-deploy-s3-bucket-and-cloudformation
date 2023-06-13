import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';
import { useTranslation } from '@/common/lib/i18n';
import { usePortfolioTranslation } from '@/common/hooks/usePortfolioTranslation';
import { clientsLogos } from '@/common/utils/constants';
import PortfolioCarousel from '@/common/components/PortfolioCarousel';
import TestimonialCard from '@/common/components/TestimonialCard';
import Title from '@/common/components/Title/Gradient';
import Icon from '@/common/components/Icon';
import ButtonRaise from '@/common/components/ButtonRaise';

const Clients = () => {
    const {
        query: { locale },
    } = useRouter();
    const [i18nQuery] = useLanguageQuery(locale);
    const { t } = useTranslation(i18nQuery?.lang);
    const { clients } = usePortfolioTranslation();

    return (
        <section className="container pt-[72px] 2xl:pt-14 overflow-hidden">
            <Title
                content={t('MainHeader.clients.title')}
                size="text-[26px] lg:text-[32px]"
                underlineFixed
            />
            <div className="section-container clients-list">
                <div className="flex flex-wrap justify-center items-center gap-10 xl:gap-12">
                    {clientsLogos.map(client => {
                        return (
                            <Icon key={client.image} name={client.image} className={client.class} />
                        );
                    })}
                </div>
            </div>
            <PortfolioCarousel carouselClassName={'clientsCarousel'} adaptiveHeightValue={48}>
                {clients.map((client, index) => (
                    <div
                        key={client.companyName}
                        className={`keen-slider__slide number-slide flex justify-center items-center h-[420px] w-[300px]`}
                    >
                        <TestimonialCard
                            clientImageUrl={client?.image}
                            imageAlt={`${client?.companyName} logo`}
                            clientPosition={client?.title}
                            clientFirstName={client?.name}
                            clientLastName={client?.lastName}
                            clientOpinion={client?.text}
                            clientCompany={client?.companyName}
                            textColor={client.textColor}
                        />
                    </div>
                ))}
            </PortfolioCarousel>
            <div className="flex justify-center">
                <ButtonRaise
                    locale={i18nQuery?.lang}
                    ariaLabel={t('navbar.item4.ariaLabel')}
                    customStyles="h-[37px] py-2 !px-4 !text-custom-base"
                    i18nKeyText={'ButtonProject'}
                    pathname="/contact"
                />
            </div>
        </section>
    );
};

export default Clients;
