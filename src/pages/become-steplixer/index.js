import { useTranslation } from "next-export-i18n";
import HeadTag from "@/common/components/HeadTag";
import Gradient from "@/common/components/Title/Gradient";
import BecomeCard from "@/common/components/BecomeCard";
import { BECOME_BENEFITS, OUR_VALUES } from "@/common/utils/constants";
import Accordion from "@/common/components/Accordion";
import TitleIcon from "@/common/components/Title/TitleIcon";
import CardContact from "@/common/components/CardContact";
import { copyToClipboard, openLink } from "@/common/utils/methods";

export default function BecomeSteplixerPage() {
	const { t } = useTranslation();

	return (
		<>
			<HeadTag
				title={t("metaTags.becomeSteplixer.title")}
				description={t("metaTags.becomeSteplixer.description")}
				keywords={t("metaTags.becomeSteplixer.keywords")}
			/>
			<section className="py-10 px-4 sm:px-0 w-full container mx-auto flex-col">
				<Gradient
					borderPosition="left"
					content={t("BecomeSteplixerSection.title")}
					borderWidth="border-2"
					size="text-4xl"
					height="h-[32px]"
				/>

				<div className="my-10">
					{BECOME_BENEFITS.map((item, index) => (
						<BecomeCard key={index} icon={item.icon} benefit={item.benefit} />
					))}
				</div>

				<Gradient
					borderPosition="left"
					content={t("BecomeSteplixerSection.title2")}
					borderWidth="border-2"
					size="text-[26px]"
					height="h-[32px] mt-[72px]"
				/>

				<Accordion chevron>
					{OUR_VALUES.map((item, index) => (
						<Accordion.Item key={index}>
							<Accordion.Header>
								<TitleIcon
									icon={item.icon}
									title={t(`SteplixInternalValues.${item.value}.title`)}
									spacing="gap-4"
									titleSize="text-base"
								/>
							</Accordion.Header>
							<Accordion.Body>
								<p className="mt-4">
									{t(`SteplixInternalValues.${item.value}.description`)}
								</p>
							</Accordion.Body>
						</Accordion.Item>
					))}
				</Accordion>
				<div className="mt-[72px] mb-8">
					<p className="font-sofia font-bold text-[26px] leading-7 text-center text-purple">
						Si sabes que puedes ser Steplixer...
					</p>

					<p className=" font-sofia font-bold text-[26px] leading-7 text-center text-purple">
						¡Envíanos tu CV!
					</p>
				</div>

				<CardContact
					email="rrhh@steplix.com"
					name="Josefina"
					surname="Salimei"
					imgSrc={"assets/img/become/josefina-salimei.png"}
					onClickCopyButton={() => copyToClipboard("rrhh@steplix.com")}
					onClickSocialMediaButton={() =>
						openLink("https://www.linkedin.com/in/josefina-salimei-6b2b07138/")
					}
				/>
			</section>
		</>
	);
}
