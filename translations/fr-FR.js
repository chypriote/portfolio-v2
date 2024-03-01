export default {
	studies: {
		uha: {
			title: 'Université de Haute-Alsace',
			subtitle: 'Master en Management de Projets',
		},
		epitech: {
			title: 'EPITECH Paris',
			subtitle: 'Expert en technologies de l\'information',
		},
		bjtu: {
			title: 'Beijing Jiatong University',
			subtitle: 'Master en Génie logiciel',
		},
		hei: {
			title: 'HEI Lille',
			subtitle: 'Deux années de classe préparatoire ingénieure, option Physique-Chimie',
		},
		bac: {
			title: 'Baccalauréat général',
			subtitle: 'Série scientifique [Mention Assez Bien],',
		},
	},
	lang: {
		french: 'Français',
		english: 'Anglais',
		german: 'Allemand',
		chinese: 'Chinois',
		fluent: 'Courant',
		intermediary: 'Intermediaire',
		beginner: 'Débutant',
	},
	work: {
		nrj: {
			subtitle: 'Développeur FullStack Symfony React',
			description: '',
		},
		letudiant: {
			subtitle: 'Développeur FullStack Symfony Vue.js',
			description: 'L\'Étudiant est une entreprise reconnue à l\'échelle nationale pour les informations qu\'elle diffuse auprès des lycéens et étudiants.\nLes Tests, Quiz et Jeux concours du site sont le premier vecteur de génération de leads et l\'un des enjeux principaux du site. Ils représentent la majorité du trafic.',
			missions: {
				quiz: {
					title: 'Refonte des Tests, Quiz et Jeux concours', description: 'Le but du projet était de procéder à la migration complète de l\'ancien système de tests & quiz, fonctionnant en combinant Symfony 2 et un prestataire externe, vers une nouvelle version entièrement développée en interne sur Symfony 6.\nMon rôle a été de définir une nouvelle architecture de base de données correspondant aux besoins futurs de cette fonctionnalité, tout en permettant la migration des données déjà existantes vers celle-ci.\nLe back-office utilisé par les webmasters de l\'Etudiant utilise Vue.js en front, et communique avec l\'API du site via API Platform. Le frontend du site est quant à lui réalisé à partir de templates Twig couplées à du JavaScript natif, et utilisant TailwindCSS pour le style.\nAfin d\'optimiser au maximum les performances de ces pages, les différents formulaires sont indexés dans ElasticSearch, et un cache Redis a été mis en place.\nLa refonte a été mise en production avec succès au début du mois de Juin.',
				},
			},
		},
		assoconnect: {
			subtitle: 'Développeur Backend Symfony',
			description: 'AssoConnect est un logiciel complet permettant de faciliter la gestion des associations pour leurs responsables.\nL’équipe Accounting est en charge de toute la partie Comptabilité du logiciel. Son rôle est de maintenir et développer les différentes fonctionnalités utilisées par les associations.',
			missions: {
				tips: { title: 'Nouveau système de paiement: Tips', description: 'Développement d’un nouveau système de paiement permettant aux utilisateurs de payer directement AssoConnect, au lieu d’avoir une commission prélevée sur chaque transaction.\nAprès mise en ligne, plus de 50% des associations décident d’utiliser ce nouveau système.' },
				i18n: { title: 'Internationalisation de l’application Comptabilité', description: 'Dans le cadre de l’expansion de l’entreprise aux US, adaptation de la comptabilité pour pouvoir gérer les différences entre la France et les US.Abstraction complète de la comptabilité pour permettre d’uniformiser la technique, tout en étant en mesure d’afficher les documents comptables au format adapté pour l’utilisateur.' },
			},
		},
		carizy: {
			subtitle: 'Développeur FullStack Symfony Vue.js',
			description: 'Carizy est une plateforme d’achat et de revente de voitures d’occasion en ligne. Carizy développe aussi une application Android et iOS pour permettre à des techniciens d’inspecter et valider les voitures mises en vente.\nL’équipe Market a pour rôle de maintenir et développer les différentes interfaces utilisées par les clients, qu’ils soient vendeurs ou acheteurs.',
			missions: {
				funnel: { title: 'Nouveau funnel de vente', description: 'Refactorisation complète de l’interface de mise en vente d’une voiture par un particulier.\nPassage de formulaires Symfony à un frontend Nuxt.JS utilisant une API GraphQL.\nDéploiement sur AWS.' },
				financement: { title: 'Mise en place d’un système de financement', description: 'Permet aux utilisateurs de faire financer leurs véhicules par un partenaire de Carizy (DIAC).\nCréation d’un micro-service Node.JS avec TypeScript faisant appel à l’API DIAC pour récupérer les différentes options de financement disponibles pour un client.\nIntégration du micro-service dans l’API GraphQL Symfony de Carizy' },
			},
		},
		legalplace: {
			subtitle: 'Développeur FullStack NodeJS React',
			description: 'Development of internal dashboards and tools, using React, NodeJS and Typescript.\nResponsible for technical decisions, planification and repartition of tasks.\nMaintenance, updates and development of new functionalities on the Legalplace.fr website\nIntegration of best-practices such as CI and CD.\nLeadership on high plus-value features (payment solutions, generation of automatically filled PDF documents)',
			missions: {

			},
		},
		aaa: {
			subtitle: 'Team Manager',
			description: 'Manager for a professional League of Legends team.\nIn charge of the weekly planning and calendar for the team.\nResponsible for organizing travels and accommodations for events all over France.\nMain point of contact for tournament officials, internal departments and other teams.',
		},
		smartangels: {
			subtitle: 'Développeur FullStack Symfony Angular.js',
			description: 'SmartAngels était une plateforme de financement participatif pour des startups, mettant en relation investisseurs privés et créateurs d’entreprise.',
			missions: {
				refonte: { title: 'Refonte des pages de levées de fond', description: 'Migration des pages de campagne de templates Twig à des pages dynamiques avec AngularJS.\nCréation d’une API SmartAngels utilisée par le frontend pour afficher des infos détaillées sur les différentes levées de fond.' },
				gestion: { title: 'Gestion de portefeuille', description: 'Création d’un nouvel outil de gestion de portefeuille d’actions destiné à des sociétés de gestion.\nCréation de plusieurs outils frontend en Angular.JS permettant le suivi des portefeuilles, le reporting, ainsi que facilitant la gestion des équités pour les entrepreneurs.\nÉvolutions de l’API SmartAngels pour être utilisée par ces outils.' },
			},
		},
	},
}
