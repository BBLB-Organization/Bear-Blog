export interface Blog{
    id: number | undefined,
    blogText: string,
    blogTitle: string,
    imageId: number | undefined,
    tagListId: number | undefined,
    commentId: string | undefined,
    userName: string,
    createdOn : Date
}