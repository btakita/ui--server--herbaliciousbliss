import { container__div_ } from '@btakita/ui--any--herbaliciousbliss/container'
import { site__social_a1_ } from '@rappstack/domain--server/site'
import { class_ } from 'ctx-core/html'
import { a_, br_, div_, footer_, li_, span_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
export function site__footer_({
	ctx,
	class: _class,
}:{
	ctx:request_ctx_T
	class?:string
}) {
	return (
		footer_({
			id: 'site__footer',
			class: class_(
				'py-20',
				'md:py-40',
				_class)
		}, [
			container__div_({}, [
				div_({
					class: class_(
						'mx-auto',
						'w-full',
						'md:w-10/12',
						'lg:w-8/12',
						'xl:w-6/12',
						'flex',
						'flex-row',
						'flex-wrap',
						'md:flex-nowrap',
						'items-start',
						'justify-between',
						'md:justify-start',
						'sm:space-x-12',
						'text-gray-600',
						'dark:text-gray-300')
				}, [
					[
						ul_({
							class: class_(
								'flex-1',
								'list-inside',
								'list-disc',
								'min-w-28',
								'sm:min-w-52',
								'space-y-8')
						}, [
							['Home', '#'],
							['About', '#'],
							['Guide', '#'],
							['Blocks', '#'],
							['Contact', '#'],
							['Terms of Use', '#'],
						].map(([text, href])=>
							li_([
								a_({
									href,
									class: class_(
										'transition',
										'hover:text-primary')
								}, text)
							]))),
						ul_({
							role: 'list',
							class: class_(
								'flex-1',
								'min-w-28',
								'sm:min-w-52',
								'space-y-8')
						}, (site__social_a1_(ctx) ?? []).map(social=>
							li_([
								a_({
									href: '#',
									class: class_(
										'flex',
										'items-center',
										'space-x-3',
										'transition',
										'hover:text-primary')
								}, [
									social.icon_({
										class: class_(
											'w-5',
											'stroke-current',
											'fill-current')
									}),
									span_(social.link_title)
								])
							]))),
						div_({
							class: class_(
								'flex-1',
								'mt-8',
								'sm:mt-0',
								'mb-auto',
								'sm:mb-auto',
								'min-w-40',
								'sm:min-w-52',
								'sm:w-10/12',
								'space-y-8',
								'text-center',
								'sm:text-left')
						}, [
							'153 West Lake Mead Parkway Suite 2400 Henderson, NV 89013 USA',
							div_([
								a_({
									href: 'https://www.google.com/maps/dir/?api=1&destination=153+West+Lake+Mead+Parkway%0ASuite+2400%0AHenderson%2C+NV+89013++USA'
								}, 'Directions')
							]),
							div_([
								'Open Hours', br_(),
								'By Appointment'
							]),
							div_([
								a_({ href: 'tel:3415296160' }, '(341) 529-6160')
							]),
							div_([
								a_({ href: 'mailto:lyrascookies@gmail.com' }, 'lyrascookies@gmail.com')
							])
						])
					]
				])
			])
		])
	)
}
