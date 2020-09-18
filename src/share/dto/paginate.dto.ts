export class PaginateDto {
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
    totalDocs?: number;
    totalPages?: number;
    pagingCounter?: number;
    hasPrevPage?: number;
    hasNextPage?: number;
    prevPage?: number;
    nextPage?: number;
  }