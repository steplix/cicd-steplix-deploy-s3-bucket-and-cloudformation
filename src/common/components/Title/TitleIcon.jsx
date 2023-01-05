import PropTypes from "prop-types";
import Icon from "@/common/components/Icon";
import { useTranslation } from "next-export-i18n";

const TitleIcon = ({ icon, title, spacing, titleSize }) => {
	const { t } = useTranslation();
	return (
		<div className={`flex ${spacing}`}>
			<Icon name={icon} className="w-6" />
			<h3 className={`text-purple font-semibold ${titleSize}`}>{title}</h3>
		</div>
	);
};

TitleIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	spacing: PropTypes.string,
	titleSize: PropTypes.string,
};

TitleIcon.defaultProps = {
	spacing: "gap-2",
	titleSize: "text-xl",
};

export default TitleIcon;
