import { tb_a_ } from '@rappstack/ui--any/anchor'
import { class_, html_style_ } from 'ctx-core/html'
import { raw_, type tag_dom_T } from 'relementjs'
import {
	a_,
	dd_,
	div_,
	dl_,
	dt_,
	em_,
	h1_,
	h2_,
	h3_,
	h4_,
	h5_,
	img_,
	li_,
	main_,
	span_,
	strong_,
	ul_
} from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { aries__svg_ } from '../icon/index.js'
import { layout__doc_html_ } from '../layout/index.js'
import GWA_business_card_Lyra_Star_webp from '../public/asset/image/lyra/GWA_business_card_Lyra_Star.webp'
import SparkITude_small_board_2b_webp from '../public/asset/image/lyra/SparkITude_small_board_2b.webp'
import Tea_house_profile_3_09_24_webp from '../public/asset/image/lyra/Tea-house-profile-3-09-24.webp'
type props_T = { ctx:request_ctx_T }
const a__class = class_(
	'text-blue-600',
	'visited:text-card-indigo',)
const child_a__class = class_(
	'text-blue-600',
	'[&>a:visited]:text-card-indigo',)
/** @see {https://stackoverflow.com/a/74753353/142571} */
const drop_shadow__class = 'drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'
export function lyra__doc_html_($p:props_T) {
	const { ctx } = $p
	return (
		layout__doc_html_({
			ctx,
			title: 'Lyra Star Mist',
		}, [
			lyra__main_(),
		])
	)
	function lyra__main_() {
		return main_({
			class: class_(
				'lg:h-[1280px]',
				'w-full',
				'lg:w-[1080px]',
				'relative',
				'grid',
				'grid-cols-5',
				'lg:grid-rows-7',
				'grid-flow-row',
			),
		}, [
			div_({
				class: class_(
					'absolute',
					'top-0',
					'left-0',
					'lg:bg-no-repeat',
					'bg-center',
					'w-full',
					'h-full',
					'z-0',),
				style: html_style_({
					'background-image': `url('` + SparkITude_small_board_2b_webp + `')`
				})
			}),
			cell_l0_(),
			cell_l1_l0_(),
			cell_l1_r0_(),
			cell_r0_(),
		])
	}
	function cell_l0_() {
		return (
			div_({
				id: 'cell-l0',
				class: class_(
					'relative',
					'z-10',
					'row-start-1',
					'lg:row-start-1',
					'col-span-5',
					'lg:col-span-3',
					'lg:row-span-3',
					'flex',
					'flex-col',
					'pb-4',
					'lg:pb-0',
				)
			}, [
				div_({
					class: class_(
						'absolute',
						'top-0',
						'left-0',
						'w-full',
						'h-full',
						'-z-10',
						'bg-gradient-to-tr',
						'from-card-l0-bl',
						'to-card-l0-tr',)
				}),
				div_({
					class: class_(
						'absolute',
						'top-0',
						'left-0',
						'w-full',
						'h-full',
						'-z-10',
						'bg-gradient-to-br',
						'from-card-l0-tl',
						'to-card-l0-br',
						'opacity-60')
				}),
				h1_({
					class: class_(
						'flex-grow-0',
						'relative',
						'block',
						'mx-auto',
						'text-3xl',
						'font-bold',
						'text-center',
						'mt-4',)
				}, 'Lyra Star Mist'),
				content_(),
			])
		)
		function content_() {
			return div_({
				class: class_(
					'flex-grow',
					'relative',
					'w-full',
					'grid',
					'grid-cols-5',
					'mt-2',)
			}, [
				div_({
					class: class_(
						'h-64',
						'sm:h-auto',
						'row-start-1',
						'col-start-1',
						'col-span-5',
						'sm:col-span-2',
						'bg-center',
						'bg-contain',
						'bg-no-repeat',),
					style: html_style_({
						'background-image': `url('${GWA_business_card_Lyra_Star_webp}')`
					})
				}),
				about_(),
			])
			function about_() {
				return (
					dl_({
						class: class_(
							'px-4',
							'col-start-1',
							'sm:col-start-3',
							'sm:px-0',
							'row-start-2',
							'sm:row-start-1',
							'col-span-5',
							'sm:col-span-3',
							'text-card-indigo',)
					}, [
						dt_([
							h2_({
								class: class_(
									'text-2xl',
									'text-center',)
							}, 'About:'),
						]),
						dd_([
							dl_([
								inline__dt_([
									card__h3_('Quantum Dream Weaver')
								]),
								strong_(': '),
								inline__dd_([
									`She has developed her practice to include holistic healing, education and mentorship programs`,
								]),
								div_({
									class: class_('mt-4')
								}, [
									inline__dt_({
										class: class_(
											'ml-4',
											'font-bold')
									}, [
										card__h3_('Ambassador & Liaison for')
									]),
									strong_(':'),
									dd_([
										inline__ul_([
											li_('Natural Systems Design & Education'),
											li_('Alternative Mental and Physical healing'),
											li_('Regenerative and sustainable development'),
											li_('Environmental education'),
											li_('Human Relations & Positive Psychology'),
											li_('Reiki Master — (1998)'),
										]),
									])
								]),
								div_({
									class: class_('mt-4'),
								}, [
									inline__dt_({
										class: class_(
											'ml-4',
											'font-bold')
									}, [
										card__h3_('Experience/Skills')
									]),
									strong_(':'),
									dd_({
										class: class_('text-sm')
									}, [
										inline__ul_([
											li_('Business owner (1999—present)'),
											li_('Legal Aid (2002—present)'),
											li_('Minister (2018—present)'),
											li_('Master Gardener (2016—present)'),
											li_('Skilled Artisan, artist, author, & poet (1978-present)'),
										]),
									])
								]),
							]),
						]),
					])
				)
			}
		}
	}
	function cell_l1_l0_() {
		return (
			div_({
				id: 'cell_l1',
				class: class_(
					'relative',
					'z-10',
					'row-start-2',
					'lg:row-start-4',
					'col-start-1',
					'col-span-5',
					'sm:col-span-3',
					'lg:col-span-2',
					'lg:row-span-4',
					'p-4',
					'sm:p-0',
					'text-white',)
			}, [
				div_({
					class: class_(
						'absolute',
						'-z-10',
						'top-0',
						'left-0',
						'w-full',
						'h-full',
						'bg-gray-950',
						'opacity-80',
						'sm:opacity-60',
					)
				}),
				dl_({
					class: class_(
						'p-0',
						'sm:p-4')
				}, [
					dt_([
						h2_({
							class: class_(
								'text-2xl',
								'font-bold')
						}, [
							div_([
								'Code Name/Alias: ',
								span_({
									class: class_('bg-card-indigo')
								}, 'Lea | Miss')
							]),
							div_('Hero Avatar: The Doctor')
						])
					]),
					dd_({
						class: class_('mt-4')
					}, [
						dl_([
							div_([
								inline__dt_([
									card__h3_('Star Sign')
								]),
								strong_(': '),
								inline__dd_([
									aries__svg_({
										class: class_(
											'inline-block',
											'mx-1',
											'w-4',
											'h-4',
											'stroke-white',
											'bg-card-indigo',)
									}),
									'Aries'
								]),
							]),
							div_([
								inline__dt_([
									card__h3_('Archetype')
								]),
								strong_(': '),
								inline__dd_('Motivator/Leader'),
								' | ',
								inline__dt_([
									card__h3_('Genre')
								]),
								strong_(': '),
								inline__dd_('Apocalyptic')
							]),
							div_([
								inline__dt_({
									class: class_('font-bold')
								}, [
									card__h3_('Sector')
								]),
								strong_(': '),
								inline__dd_('Education | Health & Wellness | Pets | Regenerative')
							]),
							div_({
								class: class_(
									'mt-4',
									'text-lg')
							}, [
								inline__dt_([
									card__h3_('Organization'),
								]),
								strong_(': '),
								inline__dd_({
									class: class_('font-bold')
								}, 'Great Works Alliance')
							]),
							div_({
								class: class_(
									'inline-block',
									'px-2',
									'mt-8',
									'bg-yellow-300',
									child_a__class,)
							}, [
								tb_a_({ href: 'https://lyrastarmist.substack.com/' }, 'Substack'),
								tb_a_(
									{ href: 'https://www.linkedin.com/in/lyra-star-57267343?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bz3V3x2e%2FRHW3SdBK%2FMoAYA%3D%3D' },
									'LinkedIn'),
								tb_a_({ href: 'https://twitter.com/SoulSparkLove/' }, 'X'),
								tb_a_({ href: 'https://www.instagram.com/lyra_prism/' }, 'Instagram'),
								tb_a_({ href: 'https://t.me/LyraStarMist/' }, 'Telegram'),
							]),
							div_([
								inline__dt_([
									card__h3_('Phone')
								]),
								strong_(': '),
								inline__dd_([
									a_({ href: 'tel:+13415296160' }, '(341) 529-6160'),
								])
							]),
							div_([
								inline__dt_([
									card__h3_('Email')
								]),
								strong_(': '),
								inline__dd_([
									a_({
										class: class_(
											'bg-yellow-300',
											a__class,),
										href: 'mailto:lyrascookies@gmail.com'
									}, 'lyrascookies@gmail.com'),
									' health & holistic wellness | ',
									a_({
										class: class_(
											'bg-yellow-300',
											a__class,),
										href: 'mailto:greatworksalliance@gmail.com'
									}, 'greatworksalliance@gmail.com')
								]),
							]),
							div_([
								inline__dt_([
									card__h3_('Hours/wk to dedicate')
								]),
								strong_(': '),
								inline__dd_('full time')
							]),
							div_({
								class: class_('mt-4')
							}, [
								dt_({
									class: class_(
										'after:content-[\':\']',
										'font-bold',)
								}, [
									card__h3_('Currently Spearheading')
								]),
								dd_([
									dl_([
										div_([
											inline__dt_([
												card__h4_('Projects'),
											]),
											strong_(': '),
											inline__dd_([
												tb_a_(
													{ href: 'https://docs.google.com/document/d/1i17ljNUJbhkQ3G3AV7xJGl0Bs6MEKW5_PIwGQ11gUZc/edit?usp=sharing' },
													'Quantum Life Coaching'),
												', ',
												tb_a_(
													{ href: 'https://docs.google.com/document/d/1HOGd3en53B0yafNGHgqfDsDVIWNBUHFjHlSBziaoJL8/edit?usp=sharing' },
													'IGO SoulSpark Curriculum'),
												', ',
												tb_a_(
													{ href: 'https://drive.google.com/file/d/1Gx7YjdNefAlQxzH8XlrcEGxWfCv4AFyF/view?usp=sharing' },
													'Common Unity Hub'),
											])
										]),
										div_([
											inline__dt_([
												card__h4_('Stores')
											]),
											strong_(': '),
											inline__dd_([
												tb_a_({
													href: 'https://mooch-pooch-unlimited.myspreadshop.com/'
												}, 'Mooch Pooch Unlimited'),
												', ',
												tb_a_({
													href: 'https://herbaliciousbliss.company.site/'
												}, 'Herbalicious Bliss')
											])
										]),
										div_([
											dt_([
												card__h4_({
													class: class_('after:content-[\':\']')
												}, 'Co-Op 2 Federation'),
											]),
											dd_({
												class: class_('ml-8')
											}, [
												dl_([
													div_([
														inline__dt_([
															card__h5_('Spiritual')
														]),
														strong_(': '),
														inline__dd_([
															tb_a_({
																href: 'https://docs.google.com/document/d/1DzVCMsqpuZvUryMDmqP26HAqXyPe7mJEAIqFmmhT81Y/edit?usp=sharing'
															}, 'Earth Soul Ministries')
														]),
													]),
													div_([
														inline__dt_([
															card__h5_('Galactic'),
														]),
														strong_(': '),
														inline__dd_('Terra Primus Federation'),
													]),
													div_([
														inline__dt_([
															card__h5_('Health & Education')
														]),
														strong_(': '),
														inline__dd_([
															tb_a_({
																href: 'https://docs.google.com/document/d/1moQ8E24sOpJe3gewWJWZEHNA0G1z8qZ05aigLAnG6fs/edit?usp=sharing'
															}, 'Herbalicious Bliss')
														])
													])
												])
											]),
										])
									])
								])
							]),
							div_({
								class: class_('mt-4')
							}, [
								inline__dt_([
									card__h3_('Involved in')
								]),
								strong_(': '),
								inline__dd_([
									'20+ projects | Approx. 10 networks'
								])
							])
						]),
					]),
				]),
			])
		)
	}
	function cell_l1_r0_() {
		return (
			div_({
				id: 'cell_l1_r0',
				class: class_(
					'relative',
					'z-10',
					'row-start-3',
					'sm:row-start-2',
					'lg:row-start-4',
					'col-start-1',
					'sm:col-start-4',
					'col-span-5',
					'sm:col-span-2',
					'lg:col-span-1',
					'lg:row-span-4',
					'p-4',
					'sm:p-0',
					'text-white')
			}, [
				div_({
					class: class_(
						'absolute',
						'top-0',
						'left-0',
						'w-full',
						'h-full',
						'-z-10',
						'bg-gray-950',
						'opacity-80',
						'sm:opacity-60',
					)
				}),
				div_({
					class: class_(
						'my-4',
						'text-white')
				}, [
					h2_({
						class: class_(
							'text-xl',
							'font-bold',
							'bg-yellow-300',
							'text-black',
						)
					}, [
						tb_a_({
							class: a__class,
							href: 'https://docs.google.com/document/d/1_m9kefEV7Na3G34HhtKbCsFzz5ijaAF0XQe9hcHgrw0/edit'
						}, 'Support this person'),
						' Project, Org or topic'
					]),
					dl_([
						inline__dt_([
							card__h3_('Evals'),
						]),
						strong_(': '),
						inline__dd_([
							tb_a_({
								href: 'https://forms.gle/nR1Yu8RFKPjMfLir7'
							}, 'Qualify me & others here')
						])
					])
				]),
				div_({
					class: class_('mt-4')
				}, [
					inline__dt_([
						card__h3_('CoNetworking with')
					]),
					strong_(': '),
					inline__dt_(2)
				]),
				dt_({
					class: class_('mt-4')
				}, [
					card__h3_({
						class: class_(
							'after:content-[\':\']',)
					}, 'Superpowers')
				]),
				dd_([
					inline__ul_([
						li_('Alturism'),
						li_('Innovation'),
						li_('Creativity'),
						li_('Empathy'),
						li_('Leadership'),
						li_('Sensemaking'),
						li_('Critical Thinking'),
						li_('Wisdom'),
					])
				]),
				dt_({
					class: class_('mt-4')
				}, [
					card__h3_({
						class: class_(
							'after:content-[\':\']',)
					}, 'Field Skills')
				]),
				dd_([
					inline__ul_([
						li_('Reiki Master | Health & Healing'),
						li_('Reverse Engineer'),
						li_('Writer | Author'),
						li_('Master Gardener | Agriculture'),
						li_('Adaptive Action Design'),
						li_('Natural Chemist'),
						li_('Motivational speaker'),
					])
				])
			])
		)
	}
	function cell_r0_() {
		return (
			div_({
				id: 'cell_r0',
				class: class_(
					'relative',
					'z-10',
					'row-start-4',
					'sm:row-start-3',
					'lg:row-start-1',
					'col-span-5',
					'lg:col-span-2',
					'lg:row-span-7',
					'text-white',)
			}, [
				div_({
					class: class_(
						'absolute',
						'top-0',
						'left-0',
						'w-full',
						'h-full',
						'bg-gradient-to-tl',
						'from-card-r0-br',
						'to-card-r0-tl',
						'opacity-90',
						'-z-10',)
				}),
				div_([
					img_({
						src: Tea_house_profile_3_09_24_webp,
						class: class_(
							'mx-auto',
							'sm:mx-0',
							'sm:float-right',
							'w-72',
							'lg:w-36',
							'lg:h-[211px]',
							'aspect-auto',)
					}),
				]),
				dl_({
					class: class_('px-4')
				}, [
					dt_([
						h2_({
							class: class_(
								'mt-4',
								'text-xl',
								'font-bold',
								drop_shadow__class,)
						}, 'Quantum Life Coach')
					]),
					dd_([
						drop_shadow_card__h3_('Free Agent Consultant'),
						strong_(' | '),
						drop_shadow_card__h3_('Community Ambassador & Liaison'),
						strong_(' | '),
						drop_shadow_card__h3_('Jedi Mentor & Steward'),
						strong_(' | '),
						drop_shadow__em_('“I am here to assist in igniting your Soul Spark.”'),
						dl_([
							div_({
								class: class_('mt-4')
							}, [
								inline__dt_([
									drop_shadow_card__h2_('Passion'),
								]),
								strong_(': '),
								drop_shadow_inline__dd_('Creating & sharing in the magic of life'),
							]),
							div_({
								class: class_('mt-4')
							}, [
								inline__dt_([
									drop_shadow_card__h2_('Top Skills'),
								]),
								strong_(': '),
								inline__dd_([
									drop_shadow__span_('Public Speaking'),
									' • ',
									drop_shadow__span_('Leadership Development'),
									' • ',
									drop_shadow__span_('Coaching'),
									' • ',
									drop_shadow__span_('Project Management'),
									' • ',
									drop_shadow__span_('Public Policy'),
								]),
							]),
							div_({
								class: class_('mt-4')
							}, [
								inline__dt_([
									drop_shadow_card__h2_('Ideal role'),
								]),
								strong_(': '),
								inline__dd_([
									raw_([
										'Co-Conductor',
										'Orchestrator',
										'Regenerative Holistic Eco System Design Specialist',
									].map(text=>
										drop_shadow__span_(text)
									).join(' / '))
								]),
							]),
							div_({
								class: class_('mt-4')
							}, [
								inline__dt_([
									drop_shadow_card__h2_('Ideal Setting'),
								]),
								strong_(': '),
								drop_shadow_inline__dd_('In nature, relaxing tea shop, places of healing'),
							]),
							div_({
								class: class_('mt-4')
							}, [
								inline__dt_([
									drop_shadow_card__h2_('Priority Anchor'),
								]),
								strong_(': '),
								inline__dd_([
									drop_shadow__span_('Heart'),
									' - ',
									drop_shadow__span_('Head Synchronicity'),
								]),
							]),
							div_({
								class: class_('mt-4')
							}, [
								inline__dt_([
									drop_shadow_card__h2_('Mission'),
								]),
								strong_(': '),
								drop_shadow_inline__dd_('Inspire & Empower the Hero within each of us! Unlocking your SoulSparks.'),
							]),
							div_({
								class: class_('mt-4')
							}, [
								inline__dt_([
									drop_shadow_card__h2_('Passions Focus'),
								]),
								strong_(': '),
								inline__dd_([
									raw_([
										'social re-engineering for excellence & innovation',
										'natural system design',
										'health in nature',
										'network scout & facilitator',
										'edutainment design & app',
										'quantum design ~ Zen',
										'journalism',
										'coaching',
										'psychology',
										'philosophy',
										'music composition',
									].map(text=>
										drop_shadow__span_(text)
									).join(' | '))
								]),
							]),
							div_({
								class: class_('mt-4')
							}, [
								inline__dt_([
									drop_shadow_card__h2_('Values'),
								]),
								strong_(': '),
								inline__dd_([
									raw_([
										'Honoring the Golden Rule.  Being straight with each other',
										'7th Generation Principles',
										'Empathy',
										'Perseverance',
										'Soul Sovereignty',
									].map(text=>
										drop_shadow__span_(text)
									).join(' | '))
								]),
							]),
							div_({
								class: class_('mt-4')
							}, [
								inline__dt_([
									drop_shadow_card__h2_('Offerings'),
								]),
								strong_(': '),
								inline__dd_([
									drop_shadow__span_('Open Minded Human for closest collaborators'),
									inline__ul_([
										li_([
											tb_a_({
												href: 'https://docs.google.com/document/d/15H_-XykD7o4BlQP_pJCJRBTmErOfbmORmvSjNKjA-FM/edit?usp=drivesdk',
												class: class_(
													'bg-yellow-300',
													a__class,),
											}, 'Catalog Subscriptions | Products | Merch')
										]),
										li_([
											tb_a_({
												href: 'https://docs.google.com/document/d/1sFsc3VqZAw3KmrM3DyfKh1ug6aVhE-FaVzspEXrcpD0/edit?usp=sharing',
												class: class_(
													'bg-yellow-300',
													a__class,),
											}, 'Project portfolio catalog hub | Quests')
										]),
									])
								]),
							]),
							div_({
								class: class_('mt-4')
							}, [
								inline__dt_([
									drop_shadow_card__h2_('Needs'),
								]),
								strong_(': '),
								drop_shadow_inline__dd_([
									tb_a_({
										href: 'https://docs.google.com/document/d/1VlSYFmnecQ60IBSnWaw0R7V4dbRK3Da_JN6RO0TTgBc/edit?usp=sharing',
										class: class_(
											'bg-yellow-300',
											a__class,),
									}, 'Needed list'),
									' (For barter, trade, or exchange of services)'
								]),
							]),
						]),
					])
				]),
				img_({
					class: class_('mt-4'),
					src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT-iKCAerPsp1HddcD3DMElYQadTWsLyYi9ARdwa06sJBm06b869RsSfuqxaPj2CHWg6H1W3IiRpr--/pubchart?oid=881994589&format=image',
				}),
			])
		)
	}
}
function card__h2_(...arg_a1:([{ class?:string }, ...tag_dom_T[]]|tag_dom_T[])) {
	const [props, children] =
		<[{ class?:string }, tag_dom_T[]]>(
			Object.getPrototypeOf(arg_a1[0] ?? 0) === Object.prototype
				? [arg_a1[0], arg_a1.slice(1)]
				: [{}, arg_a1])
	return h2_({
		class: class_(
			'inline',
			'font-bold',
			props.class)
	}, ...children)
}
function drop_shadow_card__h2_(...arg_a1:([{ class?:string }, ...tag_dom_T[]]|tag_dom_T[])) {
	const [props, children] =
		<[{ class?:string }, tag_dom_T[]]>(
			Object.getPrototypeOf(arg_a1[0] ?? 0) === Object.prototype
				? [arg_a1[0], arg_a1.slice(1)]
				: [{}, arg_a1])
	return card__h2_({
		class: class_(
			drop_shadow__class,
			props.class)
	}, ...children)
}
function card__h3_(...arg_a1:([{ class?:string }, ...tag_dom_T[]]|tag_dom_T[])) {
	const [props, children] =
		<[{ class?:string }, tag_dom_T[]]>(
			Object.getPrototypeOf(arg_a1[0] ?? 0) === Object.prototype
				? [arg_a1[0], arg_a1.slice(1)]
				: [{}, arg_a1])
	return h3_({
		class: class_(
			'inline',
			'font-bold',
			props.class)
	}, ...children)
}
function drop_shadow_card__h3_(...arg_a1:([{ class?:string }, ...tag_dom_T[]]|tag_dom_T[])) {
	const [props, children] =
		<[{ class?:string }, tag_dom_T[]]>(
			Object.getPrototypeOf(arg_a1[0] ?? 0) === Object.prototype
				? [arg_a1[0], arg_a1.slice(1)]
				: [{}, arg_a1])
	return card__h3_({
		class: class_(
			drop_shadow__class,
			props.class)
	}, ...children)
}
function card__h4_(...arg_a1:([{ class?:string }, ...tag_dom_T[]]|tag_dom_T[])) {
	const [props, children] =
		<[{ class?:string }, tag_dom_T[]]>(
			Object.getPrototypeOf(arg_a1[0] ?? 0) === Object.prototype
				? [arg_a1[0], arg_a1.slice(1)]
				: [{}, arg_a1])
	return h4_({
		class: class_(
			'inline',
			'font-bold',
			props.class)
	}, ...children)
}
function card__h5_(...arg_a1:([{ class?:string }, ...tag_dom_T[]]|tag_dom_T[])) {
	const [props, children] =
		<[{ class?:string }, tag_dom_T[]]>(
			Object.getPrototypeOf(arg_a1[0] ?? 0) === Object.prototype
				? [arg_a1[0], arg_a1.slice(1)]
				: [{}, arg_a1])
	return h5_({
		class: class_(
			'inline',
			'font-bold',
			props.class)
	}, ...children)
}
function inline__dt_(...arg_a1:([{ class?:string }, ...tag_dom_T[]]|tag_dom_T[])) {
	const [props, children] =
		<[{ class?:string }, tag_dom_T[]]>(
			Object.getPrototypeOf(arg_a1[0] ?? 0) === Object.prototype
				? [arg_a1[0], arg_a1.slice(1)]
				: [{}, arg_a1])
	return dt_({
		class: class_(
			'inline',
			props.class)
	}, ...children)
}
function inline__dd_(...arg_a1:([{ class?:string }, ...tag_dom_T[]]|tag_dom_T[])) {
	const [props, children] =
		<[{ class?:string }, tag_dom_T[]]>(
			Object.getPrototypeOf(arg_a1[0] ?? 0) === Object.prototype
				? [arg_a1[0], arg_a1.slice(1)]
				: [{}, arg_a1])
	return dd_({
		class: class_(
			'inline',
			props.class)
	}, ...children)
}
function drop_shadow_inline__dd_(...arg_a1:([{ class?:string }, ...tag_dom_T[]]|tag_dom_T[])) {
	const [props, children] =
		<[{ class?:string }, tag_dom_T[]]>(
			Object.getPrototypeOf(arg_a1[0] ?? 0) === Object.prototype
				? [arg_a1[0], arg_a1.slice(1)]
				: [{}, arg_a1])
	return inline__dd_({
		class: class_(
			drop_shadow__class,
			props.class)
	}, ...children)
}
function inline__ul_(...arg_a1:([{ class?:string }, ...tag_dom_T[]]|tag_dom_T[])) {
	const [props, children] =
		<[{ class?:string }, tag_dom_T[]]>(
			Object.getPrototypeOf(arg_a1[0] ?? 0) === Object.prototype
				? [arg_a1[0], arg_a1.slice(1)]
				: [{}, arg_a1])
	return ul_({
		class: class_(
			'ml-4',
			'list-disc',
			'[&>li]:pl-4',
			props.class,)
	}, ...children)
}
function drop_shadow__span_(...arg_a1:([{ class?:string }, ...tag_dom_T[]]|tag_dom_T[])) {
	const [props, children] =
		<[{ class?:string }, tag_dom_T[]]>(
			Object.getPrototypeOf(arg_a1[0] ?? 0) === Object.prototype
				? [arg_a1[0], arg_a1.slice(1)]
				: [{}, arg_a1])
	return span_({
		class: class_(
			drop_shadow__class,
			props.class,)
	}, ...children)
}
function drop_shadow__em_(...arg_a1:([{ class?:string }, ...tag_dom_T[]]|tag_dom_T[])) {
	const [props, children] =
		<[{ class?:string }, tag_dom_T[]]>(
			Object.getPrototypeOf(arg_a1[0] ?? 0) === Object.prototype
				? [arg_a1[0], arg_a1.slice(1)]
				: [{}, arg_a1])
	return em_({
		class: class_(
			drop_shadow__class,
			props.class,)
	}, ...children)
}
