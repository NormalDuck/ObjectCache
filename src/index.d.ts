declare class ObjectCache<T extends BasePart> {
    constructor(Template: T, CacheSize: number | undefined, CachesContainer: Instance | undefined)
    Destroy(): void
    ReturnPart(Part: T): void
    GetPart(PartCFrame: CFrame | undefined): T
}

export = ObjectCache