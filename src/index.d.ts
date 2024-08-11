declare class ObjectCache<T extends BasePart> {
    constructor(Template: T, CacheSize: number | void, CachesContainer: Instance | void )
    Destroy(): void
    ReturnPart(Part: T): void
    GetPart(PartCFrame: CFrame | undefined): T
}

export = ObjectCache