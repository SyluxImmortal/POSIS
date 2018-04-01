declare interface IPosisInterfaces {
    baseKernel: IPosisKernel;
    spawn: IPosisSpawnExtension;
    sleep: IPosisSleepExtension;
    coop: IPosisCooperativeScheduling;
}
