export const schema = {
    models: {
        Blog: {
            name: 'Blog',
            fields: {
                id: {
                    name: 'id',
                    isArray: false,
                    type: 'ID',
                    isRequired: true,
                    attributes: [],
                },
                name: {
                    name: 'name',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                posts: {
                    name: 'posts',
                    isArray: true,
                    type: {
                        model: 'Post',
                    },
                    isRequired: false,
                    attributes: [],
                    isArrayNullable: true,
                    association: {
                        connectionType: 'HAS_MANY',
                        associatedWith: 'blog',
                    },
                },
                createdAt: {
                    name: 'createdAt',
                    isArray: false,
                    type: 'AWSDateTime',
                    isRequired: false,
                    attributes: [],
                    isReadOnly: true,
                },
                updatedAt: {
                    name: 'updatedAt',
                    isArray: false,
                    type: 'AWSDateTime',
                    isRequired: false,
                    attributes: [],
                    isReadOnly: true,
                },
            },
            syncable: true,
            pluralName: 'Blogs',
            attributes: [
                {
                    type: 'model',
                    properties: {},
                },
            ],
        },
        Post: {
            name: 'Post',
            fields: {
                id: {
                    name: 'id',
                    isArray: false,
                    type: 'ID',
                    isRequired: true,
                    attributes: [],
                },
                title: {
                    name: 'title',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                blog: {
                    name: 'blog',
                    isArray: false,
                    type: {
                        model: 'Blog',
                    },
                    isRequired: false,
                    attributes: [],
                    association: {
                        connectionType: 'BELONGS_TO',
                        targetName: 'blogID',
                    },
                },
                comments: {
                    name: 'comments',
                    isArray: true,
                    type: {
                        model: 'Comment',
                    },
                    isRequired: false,
                    attributes: [],
                    isArrayNullable: true,
                    association: {
                        connectionType: 'HAS_MANY',
                        associatedWith: 'post',
                    },
                },
                createdAt: {
                    name: 'createdAt',
                    isArray: false,
                    type: 'AWSDateTime',
                    isRequired: false,
                    attributes: [],
                    isReadOnly: true,
                },
                updatedAt: {
                    name: 'updatedAt',
                    isArray: false,
                    type: 'AWSDateTime',
                    isRequired: false,
                    attributes: [],
                    isReadOnly: true,
                },
            },
            syncable: true,
            pluralName: 'Posts',
            attributes: [
                {
                    type: 'model',
                    properties: {},
                },
                {
                    type: 'key',
                    properties: {
                        name: 'byBlog',
                        fields: ['blogID'],
                    },
                },
            ],
        },
        Comment: {
            name: 'Comment',
            fields: {
                id: {
                    name: 'id',
                    isArray: false,
                    type: 'ID',
                    isRequired: true,
                    attributes: [],
                },
                post: {
                    name: 'post',
                    isArray: false,
                    type: {
                        model: 'Post',
                    },
                    isRequired: false,
                    attributes: [],
                    association: {
                        connectionType: 'BELONGS_TO',
                        targetName: 'postID',
                    },
                },
                content: {
                    name: 'content',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                createdAt: {
                    name: 'createdAt',
                    isArray: false,
                    type: 'AWSDateTime',
                    isRequired: false,
                    attributes: [],
                    isReadOnly: true,
                },
                updatedAt: {
                    name: 'updatedAt',
                    isArray: false,
                    type: 'AWSDateTime',
                    isRequired: false,
                    attributes: [],
                    isReadOnly: true,
                },
            },
            syncable: true,
            pluralName: 'Comments',
            attributes: [
                {
                    type: 'model',
                    properties: {},
                },
                {
                    type: 'key',
                    properties: {
                        name: 'byPost',
                        fields: ['postID', 'content'],
                    },
                },
            ],
        },
        BankAccount: {
            name: 'BankAccount',
            fields: {
                id: {
                    name: 'id',
                    isArray: false,
                    type: 'ID',
                    isRequired: true,
                    attributes: [],
                },
                user: {
                    name: 'user',
                    isArray: false,
                    type: 'String',
                    isRequired: false,
                    attributes: [],
                },
                bank_name: {
                    name: 'bank_name',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                account_no: {
                    name: 'account_no',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                updated_at: {
                    name: 'updated_at',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                created_at: {
                    name: 'created_at',
                    isArray: false,
                    type: 'String',
                    isRequired: true,
                    attributes: [],
                },
                createdAt: {
                    name: 'createdAt',
                    isArray: false,
                    type: 'AWSDateTime',
                    isRequired: false,
                    attributes: [],
                    isReadOnly: true,
                },
                updatedAt: {
                    name: 'updatedAt',
                    isArray: false,
                    type: 'AWSDateTime',
                    isRequired: false,
                    attributes: [],
                    isReadOnly: true,
                },
            },
            syncable: true,
            pluralName: 'BankAccounts',
            attributes: [
                {
                    type: 'model',
                    properties: {},
                },
            ],
        },
    },
    enums: {},
    nonModels: {},
    version: 'dce583340266827b2220d2134babdd9f',
}
