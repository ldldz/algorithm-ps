// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// linked list의 노드에 visited라는 프로퍼티 추가
// head 부터 순회하며 방문한 노드에는 visited = true 처리, 이후 visited가 true인 노드에 다시 방문했다면 해당 리스트는 순환한다.
var hasCycle = function(head) {
    if(head === null) return false;
    let curNode = head;
    while(curNode.next){
        if(curNode.visited) return true;
        curNode.visited = true;
        curNode = curNode.next;
    }
    return false;
};