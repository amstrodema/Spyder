
declare function notify(message:string,type: string, delay: number): any;
export class Notifier {
  public static Notify(message:string,type: string, delay: number){
    notify(message, type, delay);
  }


  public static NotifyVoteUp(){
    notify("Voted Up", "success", 100);
  }
  public static NotifyVoteDown(){
    notify("Voted Down", "danger", 100);
  }

  public static NotifyVoteCancel(){
    notify("Vote cancelled", "warning", 100);
  }
}
