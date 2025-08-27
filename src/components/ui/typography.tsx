import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
	variants: {
		variant: {
			h1: 'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
			h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
			h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
			h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
			h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
			h6: 'scroll-m-20 text-base font-semibold tracking-tight',
			p: 'leading-7 [&:not(:first-child)]:mt-6',
			span: 'text-base',
			blockquote: 'mt-6 border-l-2 pl-6 italic',
			code: 'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
			ul: 'my-6 ml-6 list-disc [&>li]:mt-2',
			lead: 'text-muted-foreground text-xl',
			large: 'text-lg font-semibold',
			small: 'text-sm leading-none font-medium',
			muted: 'text-muted-foreground text-sm',
		},
	},
	defaultVariants: {
		variant: 'p',
	},
});

type ValidHTMLElements =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'p'
	| 'span'
	| 'blockquote'
	| 'code'
	| 'ul'
	| 'small';

const elementMap: Record<
	NonNullable<VariantProps<typeof typographyVariants>['variant']>,
	ValidHTMLElements
> = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	p: 'p',
	span: 'span',
	blockquote: 'blockquote',
	code: 'code',
	ul: 'ul',
	lead: 'p',
	large: 'p',
	small: 'small',
	muted: 'p',
};

interface TypographyProps
	extends React.HTMLAttributes<HTMLElement>,
		VariantProps<typeof typographyVariants> {
	as?: ValidHTMLElements;
}

function Typography({
	className,
	variant,
	as,
	children,
	...props
}: TypographyProps) {
	const Component = as || elementMap[variant || 'p'];

	return (
		<Component
			className={cn(typographyVariants({ variant, className }))}
			{...props}
		>
			{children}
		</Component>
	);
}

export { Typography, typographyVariants };
