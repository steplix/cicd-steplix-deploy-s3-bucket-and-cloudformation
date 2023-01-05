import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import AccordionItemProvider, {
	useItemAccordion,
} from "./context/AccordionItemContext";
import AccordionGlobalProvider, {
	useGlobalAccordion,
} from "./context/AccordionGlobalContext";

import Icon from "@/common/components/Icon";

export default function Accordion({ children, ...props }) {
	return (
		<AccordionGlobalProvider {...props}>
			<div className="flex">
				<div className="flex flex-col w-full m-auto gap-4">{children}</div>
			</div>
		</AccordionGlobalProvider>
	);
}

Accordion.Title = function AccordionTitle({ children, ...props }) {
	return (
		<h1
			className="text-4xl leading-5 mt-0 mb-2 text-black text-center"
			{...props}
		>
			{children}
		</h1>
	);
};

Accordion.Item = function AccordionItem({ children, ...props }) {
	return (
		<AccordionItemProvider {...props}>
			<div className="text-black m-auto mb-2 max-w-3xl first-of-type:mt-12 last-of-type:mb-0 w-full rounded-2xl p-6 no-highlight accordion--shadow">
				{children}
			</div>
		</AccordionItemProvider>
	);
};

Accordion.Header = function AccordionHeader({ children, ...props }) {
	const { id, setItemId, toggleShow, rotate } = useItemAccordion();
	const { chevron } = useGlobalAccordion();

	const onClick = () => {
		toggleShow();
		setItemId(id);
	};

	return (
		<>
			<div
				className="rounded-md transition-all flex justify-between cursor-pointer mb-[1px] text-2xl font-normal bg-slate-100 select-none items-center"
				onClick={onClick}
				{...props}
			>
				{children}
				{chevron && (
					<span
						className={`${rotate ? "rotate-180" : "rotate-0"} transition-all `}
					>
						<Icon name="chevronDown" className="w-6" fill="#00A9E0" />
					</span>
				)}
			</div>
		</>
	);
};

Accordion.Body = function AccordionHeader({ children }) {
	const { toggleItem } = useItemAccordion();

	const [maxH, setMaxH] = useState("h-0");

	useEffect(() => {
		if (toggleItem) {
			return setMaxH("h-full");
		}

		return setMaxH("h-0");
	}, [toggleItem]);

	return (
		<>
			<div
				className={`rounded-md text-[13px] font-normal bg-slate-100 whitespace-pre-wrap select-none overflow-hidden ${maxH} `}
			>
				<span className="block">{children}</span>
			</div>
		</>
	);
};

Accordion.propTypes = {
	children: PropTypes.node.isRequired,
	chevron: PropTypes.bool,
};
