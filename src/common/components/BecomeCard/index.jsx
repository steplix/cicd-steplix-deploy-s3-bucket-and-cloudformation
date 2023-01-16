import PropTypes from "prop-types";
import { useTranslation } from "@/common/lib/i18n";
import TitleIcon from "../Title/TitleIcon";

const BecomeCard = ({ icon, benefit, locale }) => {
	const { t } = useTranslation(locale);
	return (
		<article className="flex flex-col gap-2 mb-10">
			<TitleIcon icon={icon} title={t(`SteplixBenefits.${benefit}.title`)} />
			<div>
				<p>{t(`SteplixBenefits.${benefit}.description`)}</p>
			</div>
		</article>
	);
};

BecomeCard.propTypes = {
	icon: PropTypes.string.isRequired,
	benefit: PropTypes.string.isRequired,
	locale: PropTypes.string.isRequired,
};

export default BecomeCard;