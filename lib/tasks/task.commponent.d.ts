import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class TaskComponent {
    /**
     * The shape of the task
     */
    task: any;
    onPinTask: EventEmitter<any>;
    onArchiveTask: EventEmitter<any>;
    /**
     * @ignore
     * Component method to trigger the pin event
     * @param id string
     */
    onPin(id: string): void;
    /**
     * @ignore
     * Component method to trigger the archive event
     * @param id string
     */
    onArchive(id: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaskComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaskComponent, "app-task", never, { "task": { "alias": "task"; "required": false; }; }, { "onPinTask": "onPinTask"; "onArchiveTask": "onArchiveTask"; }, never, never, true, never>;
}
