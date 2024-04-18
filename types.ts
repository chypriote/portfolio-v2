export enum TechCategory {
	FRONT = 'front',
	BACK = 'back',
	TOOL = 'tool',
	DEVOPS = 'devops',
}

export enum Technos {
	HTML = 'HTML',
	CSS = 'CSS',
	JAVASCRIPT = 'Javascript',
	TYPESCRIPT = 'Typescript',
	VUE = 'Vue',
	REACT = 'React',
	NUXT = 'Nuxt',
	PHP = 'PHP',
	SQL = 'SQL',
	GRAPHQL = 'GraphQL',
	POSTGRESQL = 'PostgreSQL',
	MYSQL = 'MySQL',
	MARIADB = 'MariaDB',
	NOSQL = 'NoSQL',
	MONGODB = 'MongoDB',
	SYMFONY = 'Symfony',
	NODE = 'NodeJs',
	ELASTICSEARCH = 'ElasticSearch',
	RABBITMQ = 'RabbitMQ',
	REDIS = 'Redis',
	GIT = 'Git',
	DOCKER = 'Docker',
	JIRA = 'Jira',
	AZURE = 'AZURE',
	AWS = 'AWS',
	ANGULAR = 'AngularJs',
	GO = 'GoLang',
	SVELTE = 'Svelte',
	TRELLO = 'Trello',
}

export interface Work {
	id: string,
	title: string
	subtitle: string
	description: string
	missions?: string[]
	logo: string
	date: string
	technos: Technos[]
}

export interface Post {
	title: string
	slug: string
	excerpt: string
	published_at: Date
	updated_at: Date
}
