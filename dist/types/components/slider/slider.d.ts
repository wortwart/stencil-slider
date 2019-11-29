export declare class Slider {
    el: HTMLElement;
    showStatus: boolean;
    currentSlideNumber: number;
    slidesCount: number;
    private sliderList;
    private slideWidth;
    private controls;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    slide(amount?: number): void;
    updateControls(): void;
    switchControl(type: string, enabled: boolean): void;
    render(): any;
}
